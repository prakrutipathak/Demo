import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ApiResponse } from '../models/ApiResponse{T}';
import { Observable } from 'rxjs';
import { AddEmployee } from '../models/addEmployeemodel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl='https://localhost:7045/api/Employee/';
  constructor(private http:HttpClient) { }
  getAllEmployees():Observable<ApiResponse<Employee[]>>{
    return this.http.get<ApiResponse<Employee[]>>(this.apiUrl+'GetAllEmployees');
  }
  addEmployee(employee: AddEmployee): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(this.apiUrl+'AddEmployee', employee);
  }
  getEmployeeById(employeeId:number |undefined):Observable<ApiResponse<Employee>>{
    return this.http.get<ApiResponse<Employee>>(this.apiUrl+'GetEmployeeById/'+employeeId);
  }
  modifyEmployee(updateEmployee:Employee):Observable<ApiResponse<string>>{
    return this.http.put<ApiResponse<string>>(this.apiUrl+"ModifyEmployee",updateEmployee);
  }
  deleteEmployee(employeeId:number |undefined):Observable<ApiResponse<string>>{
    return this.http.delete<ApiResponse<string>>(this.apiUrl+'DeleteEmployee/'+employeeId);
  }
}
