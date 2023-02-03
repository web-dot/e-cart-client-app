import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { CategorytemplateComponent } from './admin/categorytemplate/categorytemplate.component';
import { UserhomeComponent } from './appuser/userhome/userhome.component';
import { UserlandingComponent } from './appuser/userlanding/userlanding.component';
import { HomeComponent } from './home/home.component';

const routes: Route[] = [
  {path:'', component:UserhomeComponent},
  {path:'admin/home', component:AdminhomeComponent},
  {path:'admin/template', component:CategorytemplateComponent},
  {path:'user/landing', component:UserlandingComponent},
  {
    path: 'admin',
    loadChildren: () => import('src/app/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
