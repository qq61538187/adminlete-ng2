import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textlength'
})
export class TextlengthPipe implements PipeTransform {

 
  /**
   * 
   * @param list 数据
   * @param field  过滤字段
   * @param keyword 用户输入的值
   */
  transform(list: any[], field: string, keyword: string): any {
    console.log(list)
    //没有指定字段  或者用户没有输入关键字   就直接返回
    if(!field || !keyword) {
      return list;
    }

    return list.filter(item => {
      let itemFieldValue = item[field].toLowerCase();
      return itemFieldValue.indexOf(keyword) >= 0;
    });

  }

}
