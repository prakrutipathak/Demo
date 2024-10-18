import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeindexComponent } from './components/employeeindex/employeeindex.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ModifyEmployeeComponent } from './components/modify-employee/modify-employee.component';
import { DetailsEmployeeComponent } from './components/details-employee/details-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeindexComponent,
    NavbarComponent,
    FooterComponent,
    AddEmployeeComponent,
    ModifyEmployeeComponent,
    DetailsEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
