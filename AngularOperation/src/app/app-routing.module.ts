import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeindexComponent } from './components/employeeindex/employeeindex.component';

const routes: Routes = [
  {path:'',redirectTo:'employees',pathMatch:'full'},
  {path:'employees',component:EmployeeindexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
