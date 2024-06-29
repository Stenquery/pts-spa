import { Routes } from '@angular/router';
import { WorkComponent } from './components/work/work.component';
import { WorkAddComponent } from './components/work/work-add/work-add.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';

export const routes: Routes = [
    {path:"",pathMatch:"full",component:WorkComponent},
    {path:"works",component:WorkComponent},
    {path:"works/category/:categoryId",component:WorkComponent},
    {path:"works/add",component:WorkAddComponent,canActivate:[LoginGuard]},
    {path:"login",component:LoginComponent}
];
