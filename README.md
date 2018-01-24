
/************************AngularJS CLI 常用命令Start************************/
/************************参考文档https://www.cnblogs.com/ckAng/p/6693702.html************************/
ng g cl my-new-class // 新建 class 
ng g c my-new-component // 新建组件 
ng g d my-new-directive // 新建指令 
ng g e my-new-enum // 新建枚举 
ng g m my-new-module // 新建模块 
ng g p my-new-pipe // 新建管道 
ng g s my-new-service // 


新建一个自带有路由项目：
ng new helloWorld --routing
/************************AngularJS CLI 常用命令END************************/



/************************AngularJS providers提供器 Start************************/
提供方式:
useFactory
useClass
useValue

优先级
 providers: [
    {provide: StockService, useFactory:
      (logger: LoggerService, isDev) => {
      console.log(isDev);
      if(isDev) {
        return new StockService(logger);
      }else{
        return new AnotherStockService(logger);
      }
    }, deps: [LoggerService, "IS_DEV_ENV"]}
    , LoggerService,
    {provide: "IS_DEV_ENV", useValue: {isDev: true}}



/************************AngularJS providers提供器 end************************/
