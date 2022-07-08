import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CompanyComponent } from './components/company/company.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { DepartmentComponent } from './components/department/department.component';
import { CandidateComponent } from './components/candidate/candidate.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CompanyComponent,
    EmployeeComponent,
    DepartmentComponent,
    CandidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
