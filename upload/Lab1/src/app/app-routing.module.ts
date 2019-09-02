import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './Employee/AddEmployee/add-employee.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';


const routes: Routes = [
  {path: "add", component: AddEmployeeComponent},
  {path: "home", component: HomeComponent},
  {path: '',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
