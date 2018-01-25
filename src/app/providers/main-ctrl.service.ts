import { Injectable } from '@angular/core';
import { HttpService } from "./http-service.service";
import { UtilsService } from "./utils.service"
import * as fundebug from "fundebug-javascript";
@Injectable()
export class MainCtrl {

  constructor(
    public httpService: HttpService,
    public utilsService:UtilsService
  ) { }

/**
   * 动态监测当前是否是正式
   * https://b.snsall.com 为配置未见正式的一个接口地址
   */
  isDeBUG() {
    if (this.httpService.httpConfig.host.bl.indexOf('https://b.snsall.com') > -1) {
      return false
    } else {
      return true
    }
  }

   /**
   * 动态设置APP头部平台信息
   */
  setPlatfrom() {
    this.httpService.httpConfig.platform = 'wx';
    this.httpService.httpConfig.space = '92E21DE17C0CE872';
    this.httpService.httpConfig.storeId = '1415';
    this.httpService.httpConfig.clientType = '2';
    this.httpService.httpConfig.uuid = this.utilsService.getUUId();
    //初始化FUNDEBUG信息
    fundebug.apikey = this.httpService.httpConfig.FUNDEBUG_API_KEY;
    this.httpService.IS_DEBUG = this.isDeBUG();
    fundebug.releasestage = this.httpService.IS_DEBUG ? 'development' : 'production';//应用开发阶段，development:开发;production:生产
    fundebug.silent = this.httpService.IS_DEBUG;//如果暂时不需要使用Fundebug，将silent属性设为true
    if (!this.httpService.IS_DEBUG) {//设置日志监控app的版本号
      fundebug.appversion =this.httpService.httpConfig.APP_VERSION;
    }
  }






}
