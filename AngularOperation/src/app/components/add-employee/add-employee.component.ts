import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddEmployee } from 'src/app/models/addEmployeemodel';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employee={
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber:''
  };
  loading:boolean=false;
  constructor(private employeeService: EmployeeService ,private router: Router) {}
  onSubmit(addEmployeeTFForm:NgForm){
    if(addEmployeeTFForm.valid){
      this.loading = true;
      console.log(addEmployeeTFForm.value);
      let addEmployee :AddEmployee ={
        firstName:addEmployeeTFForm.controls['firstName'].value,
        lastName:addEmployeeTFForm.controls['lastName'].value,
        phoneNumber:addEmployeeTFForm.controls['phoneNumber'].value,
        email:addEmployeeTFForm.controls['email'].value,
      };
      this.employeeService.addEmployee(addEmployee).subscribe({
        next:(response)=>{
          if(response.success){
            this.router.navigate(['/employees']);
          }else{
            alert(response.message);
          }
          this.loading = false;
        },
        error:(err)=>{
          console.log(err.error.message);
          this.loading=false;
          alert(err.error.message);
        },
        complete:()=>{
          this.loading=false;
          console.log("completed");
        }
      });
    }
  }

}
