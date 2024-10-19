import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.css']
})
export class DetailsEmployeeComponent implements OnInit {
  employeeId:number |undefined;
  employee:Employee={
    employeeId:0,
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber:''
  };
  
  constructor(private employeeService:EmployeeService,private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
     this.employeeId=params['employeeId'];
     this.loadCategoryDetails(this.employeeId);
    });
   
  }
  loadCategoryDetails(employeeId:number |undefined):void{
    this.employeeService.getEmployeeById(employeeId).subscribe({
      next:(response)=>{
        if(response.success){
          this.employee=response.data;
        }else{
          console.error('Failed to fetch',response.message);
        }
        
      },
      error:(err)=>{
        alert(err.error.message);
      },
      complete:()=>{
        console.log('Completed');
      }

    });
  }

}
