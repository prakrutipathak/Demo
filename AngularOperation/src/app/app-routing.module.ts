import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeindexComponent } from './components/employeeindex/employeeindex.component';
import { ModifyEmployeeComponent } from './components/modify-employee/modify-employee.component';
import { DetailsEmployeeComponent } from './components/details-employee/details-employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

const routes: Routes = [
  {path:'',redirectTo:'employees',pathMatch:'full'},
  {path:'employees',component:EmployeeindexComponent},
  {path: 'modifyEmployee/:employeeId', component: ModifyEmployeeComponent},
  {path: 'detailsEmployee/:employeeId', component: DetailsEmployeeComponent},
  {path: 'addEmployee', component: AddEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
