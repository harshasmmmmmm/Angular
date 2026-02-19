import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DemodierctiveComponent } from './demodierctive/demodierctive.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'signup',component:SignupComponent},
    {path:'databinding',component:DatabindingComponent},
    {path:'demodierctive',component:DemodierctiveComponent}

];
