import { Injectable } from '@angular/core';
import { HttpConfig } from "../providers/http-config.service";
import {
  Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod
} from '@angular/http';
import {Subscriber} from 'rxjs/Subscriber';
import { Observable, TimeoutError } from "rxjs";
import { Logger } from "./logger.service";
import { UtilsService } from "./utils.service"
import { CommonModel } from "./common-model.service";
@Injectable()
export class HttpService {
  IS_DEBUG;
  constructor(
    private http: Http, 
    public httpConfig: HttpConfig,
    private logger:Logger,
    private commonModel:CommonModel
  ) {
    console.log(this.httpConfig.host.bl)
  }
  
  public request(url: string, options: RequestOptionsArgs) {
    this.optionsAddToken(options);
    return Observable.create((observer: Subscriber<any>) => {
        this.IS_DEBUG && console.log('%c 请求前 %c', 'color:blue', '', 'url', url, 'options', options);
      // this.http.request(url, options).timeout(1000).subscribe(res => {
        this.http.request(url, options).subscribe(res => {
        this.IS_DEBUG && console.log('%c 请求成功 %c', 'color:green', '', 'url', url, 'options', options, 'res', res);
        if (res['_body'] == '') {
          res['_body'] = null;
        }
        observer.next(JSON.parse(res['_body']));
      }, err => {
        this.requestFailed(url, options, err);//处理请求失败
        observer.next(err);
      });
    });
  }


  public get(url: string, paramMap: any = null, header: any = {}){
    return this.request(url, new RequestOptions({
      method: RequestMethod.Get,
      search: HttpService.buildURLSearchParams(paramMap),
      headers: new Headers(header),
    }));
  }

  public post(url: string, body: any = {}, header: any = {}) {
    header['Content-Type'] = 'application/json; charset=UTF-8';
    return this.request(url, new RequestOptions({
        method: RequestMethod.Post,
        body: body,
        headers: new Headers(header)
      }))
  }

  public postFormData(url: string, paramMap: any = null,  header: any = {}) {
    header['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    return this.request(url, new RequestOptions({
      method: RequestMethod.Post,
      search: HttpService.buildURLSearchParams(paramMap).toString(),
      headers: new Headers(header)
    }))
  }


  public put(url: string, body: any = {}, header: any = {}){
    return this.request(url, new RequestOptions({
      method: RequestMethod.Put,
      body: body,
      headers: new Headers(header)
    }));
  }

  public delete(url: string, paramMap: any = null, header: any = {}){
    return this.request(url, new RequestOptions({
      method: RequestMethod.Delete,
      search: HttpService.buildURLSearchParams(paramMap).toString(),
         headers: new Headers(header)
    }));
  }

  public patch(url: string, body: any = {}){
    return this.request(url, new RequestOptions({
      method: RequestMethod.Patch,
      body: body
    }));
  }

  /**
   * 将对象转为查询参数
   * @param paramMap
   * @returns {URLSearchParams}
   */
  private static buildURLSearchParams(paramMap): URLSearchParams {
    let params = new URLSearchParams();
    if (!paramMap) {
      return params;
    }
    for (let key in paramMap) {
      let val = paramMap[key];
      if (val instanceof Date) {
        val = UtilsService.dateFormat(val, 'yyyy-MM-dd hh:mm:ss')
      }
      params.set(key, val);
    }
    return params;
  }

  /**
   * 处理请求失败事件
   * @param url
   * @param options
   * @param err
   */
  private requestFailed(url: string, options: RequestOptionsArgs, err: Response): void {
    this.IS_DEBUG && console.log('%c 请求失败 %c', 'color:red', '', 'url', url, 'options', options, 'err', err);
    if (err instanceof TimeoutError) {
      this.IS_DEBUG && console.log('%c 请求超时,请稍后再试! %c', 'color:red');
      return;
    }
    //err数据类型不确定,判断消息体是否有message字段,如果有说明是后台返回的json数据
    let index = JSON.stringify(err['_body']).indexOf('message');
    if (index != -1) {
      this.IS_DEBUG && console.log('%c 请求发生异常 %c', 'color:red');
      return;
    }
  
    let status = err.status;
    let msg = '请求发生异常';
    if (status === 0) {
      msg = '请求失败，请求响应出错';
    } else if (status === 404) {
      msg = '请求失败，未找到请求地址';
    } else if (status === 500) {
      msg = '请求失败，服务器出错，请稍后再试';
    }
    this.logger.httpLog(err, msg, {
      url: url,
      status: status
    });
  }

  private optionsAddToken(options: RequestOptionsArgs): void {
    if (options.headers) {
      if (!options.headers.get('space')) {
        options.headers.append("space", this.httpConfig.space);
      }
      if (!options.headers.get('clientType')) {
        options.headers.append("clientType", this.httpConfig.clientType);
      }
      if (!options.headers.get('storeId')) {
        options.headers.append("storeId", this.httpConfig.storeId);
      }
      if (!options.headers.get('platform')) {
        options.headers.append("platform", this.httpConfig.platform);
      }
      if (!options.headers.get('userId')) {
        options.headers.append("userId",this.commonModel.userId);
      }
    } else {
      options.headers = new Headers({
        'space': this.httpConfig.space,
        'clientType': this.httpConfig.clientType,
        'storeId': this.httpConfig.storeId,
        'platform':this.httpConfig.platform,
        'userId':this.commonModel.userId
      });
    }
  }




      /**
     * 设置缓存信息
     * @param key
     * @param data
     */
    setLocalStorage(key, data) {
      return window.localStorage.setItem(key, JSON.stringify(data));
  }

  /**
   * 获取指定缓存信息
   * @param key
   */
  getLocalStorage(key) {
      if (window.localStorage.getItem(key) == "undefined") {
          return undefined
      } else {
          return JSON.parse(window.localStorage.getItem(key));
      }
  }


  /**
   * 删除指定缓存
   * @param key
   */
  removeLocalStorage(key) {
      return window.localStorage.removeItem(key);
  }




}
