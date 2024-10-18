import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/ApiResponse{T}';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-employeeindex',
  templateUrl: './employeeindex.component.html',
  styleUrls: ['./employeeindex.component.css']
})
export class EmployeeindexComponent implements OnInit {
  employees:Employee[] | undefined;
  loading:boolean=false;
  employeeId:number | undefined;
  constructor(private EmployeeService:EmployeeService,private router: Router){}
  ngOnInit(): void {
this.loadEmployees();
  }

loadEmployees():void{
  this.loading = true;
  this.EmployeeService.getAllEmployees().subscribe({
    next:(response: ApiResponse<Employee[]>)=>{
      if(response.success){
        this.employees = response.data;
      }else{
        console.error('Failed to fetch Employees',response.message);
      }
      this.loading = false;
    },
    error:(error)=>{
      console.error('Error fetching Employees: ',error);
      this.loading = false;
    }
  });
}

confirmDelete(id:number):void{
  if(confirm('Are you sure?')){
    this.employeeId = id;
    this.deleteEmployee();
  }
}

deleteEmployee():void{
  this.EmployeeService.deleteEmployee(this.employeeId).subscribe({
    next:(response)=>{
      if(response.success){
        this.loadEmployees();
      }else{
        alert(response.message);
      }
    },
    error:(err)=>{
      alert(err.error.message);
    },
    complete:()=>{
      console.log('completed');
    }
  })
}

}
