export class HttpConfig {
   /***请求头部信息  决定着打包是域还是店铺 和跳转页面开始*/ 
   space ='DF4D69929FD7F405';
   clientType='1';//1是域 2是店铺
   storeId='';//如果是店铺 传店铺id
   platform='';//'android  ios  web wx' 会通过mainCtrl自动设置
   uuid = '';  //设备id 
   /***请求头部信息  决定着打包是域还是店铺 和跳转页面结束*/
   
   /******如果是店铺*******/
     // space = '92E21DE17C0CE872';
     // clientType='2';//1是域 2是店铺   
     // storeId='1415';//如果是店铺 传店铺id  
   /*************/
   /******如果是域商城*******/
   // space = 'DF4D69929FD7F405';
   // clientType='1';//1是域 2是店铺   
   // storeId='';//如果是店铺 传店铺id  
   /*************/   
   openId: string;//当前用户的Openid
   hostList = {
       //开发环境
       dev: {
           bl: 'http://d.b.snsall.com/',
           lg: 'http://d.l.snsall.com/',
           org: 'http://d.o.snsall.com/'
       },
       //测试环境
       test: {
           bl: 'https://t.b.snsall.com/',
           lg: 'https://t.l.snsall.com/',
           org: 'https://t.o.snsall.com/'
       },
       prod: {
           bl: 'https://b.snsall.com/',
           lg: 'https://l.snsall.com/',
           org: 'https://o.snsall.com/'
         }
   };
 
   //测试环境,会根据headers中的数据，来切换
   host = this.hostList.test;
   /********接口名称 调用方法最好和此明明一样 方便后期搜索******/
   version = '/';

}
