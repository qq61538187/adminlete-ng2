import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteListComponent } from '../pages/note/note-list/note-list.component';
import { NoteClassifyComponent } from '../pages/note/note-classify/note-classify.component';

const routes: Routes = [
  {path: '',component:NoteListComponent},
  {path: 'noteClassify',component:NoteClassifyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  //routes 路由配置,保存url对应展示那个组件，以及在那个RouterOutlet中展示组件
  //router-outlet  在html标记路由内容呈现位置的占位指令
  //router 在运行执行路由的对象,可以通过Route.navigate()和navigateByUrl()方法导航到一个指定的路由;
  //RouterLink  在html声明路由导航指令
  //ActivtedRoute 当前激活的路由对象  保存着当前路由的信息,如路由地址路由参数




 }
