import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-modify-employee',
  templateUrl: './modify-employee.component.html',
  styleUrls: ['./modify-employee.component.css']
})
export class ModifyEmployeeComponent {
  employeeId:number | undefined;
  loading : boolean = false;
  employee:Employee={
    employeeId:0,
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber:''
  };
  constructor(private EmployeeService:EmployeeService, private route:ActivatedRoute, private router:Router) {}
  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.employeeId = params['employeeId'];
      this.loadEmployeeDetails(this.employeeId);
    })
  }
  loadEmployeeDetails(employeeId:number | undefined):void{
    this.EmployeeService.getEmployeeById(employeeId).subscribe({
      next:(response)=>{
        if(response.success){
          this.employee = response.data;
        }else{
          console.error('Failed to fetch Employee',response.message);
        }
      },
      error:(err)=>{
        alert(err.error.message);
      },
      complete:()=>{
        this.loading = false;
        console.log("Completed");
      }
    })
  }
  onSubmit(updateEmployeeTFForm:NgForm){
    if(updateEmployeeTFForm.valid){
      this.loading = true;
      console.log(updateEmployeeTFForm.value);
      let updateEmployee :Employee ={
        employeeId:updateEmployeeTFForm.controls['employeeId'].value,
        firstName:updateEmployeeTFForm.controls['firstName'].value,
        lastName:updateEmployeeTFForm.controls['lastName'].value,
        email:updateEmployeeTFForm.controls['email'].value,
        phoneNumber:updateEmployeeTFForm.controls['phoneNumber'].value,
      };
      this.EmployeeService.modifyEmployee(updateEmployee).subscribe({
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
          this.loading = false;
          alert(err.error.message);
        },
        complete:()=>{
          this.loading = false;
          console.log("Completed");
        }
      });
    }
  }

}
