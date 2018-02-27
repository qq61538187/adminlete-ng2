import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteListComponent } from '../pages/note/note-list/note-list.component';
import { NoteClassifyComponent } from '../pages/note/note-classify/note-classify.component';
import { ErrorPageComponent } from '../pages/error-page/error-page.component';
import { NoteDetailComponent } from '../pages/note/note-detail/note-detail.component';
import { NewNoteComponent } from './../pages/note/new-note/new-note.component';
const routes: Routes = [
  { path: '', redirectTo: '/noteList',pathMatch:'full' },//重定向路由 full：精准匹配  prefix 包含匹配
  { path: 'noteList', component: NoteListComponent },
  {path:'noteEdit',component:NewNoteComponent},
  { path: 'noteClassify', component: NoteClassifyComponent },
  { path: 'noteDetail/:id', component: NoteDetailComponent },
  { path:'**',component:ErrorPageComponent}//默认路由 路由不存在页面 位置是放最后
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


  
  //页面传递数据

  //1-路由传递数据
  //localhost:4200/noteDetail?id=1&name=2  => ActivatedRoute.queryParams[id]

  //2-路由路径传递数据
  // { path: 'noteDetail/:id', component: NoteDetailComponent }=>ActivatedRoute.params[id];

  //3-路由中配置静态数据
  // { path: 'noteDetail', component: NoteDetailComponent, data: [{id:1}] }=>ActivatedRoute.data[0][id];



 }
