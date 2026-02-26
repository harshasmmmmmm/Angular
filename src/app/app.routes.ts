import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DemodierctiveComponent } from './demodierctive/demodierctive.component';
import { FormsComponent } from './forms/forms.component';
import { PipesComponent } from './pipes/pipes.component';
// import { IntegrationComponent } from './integration/integration.component';
// import { AddempComponent } from './addemp/addemp.component';
// import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'signup',component:SignupComponent},
    {path:'databinding',component:DatabindingComponent},
    {path:'demodierctive',component:DemodierctiveComponent},
    {path:'forms',component:FormsComponent},
    {path:'pipes',component:PipesComponent},
    // {path:'integration',component:IntegrationComponent},
    // {path:'addemp',component:AddempComponent},
    // {path:'employee',component:EmployeeComponent}

];
