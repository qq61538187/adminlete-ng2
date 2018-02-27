import { CanActivate }  from "@angular/router"
export class CanActivateGuard implements CanActivate { 


  canActivate() {
    var hasRandom: boolean = Math.random() < 0.5;  
    if (!hasRandom) { 
      console.log("该用户无权范围文章模块")
    }
    return hasRandom
  }


}