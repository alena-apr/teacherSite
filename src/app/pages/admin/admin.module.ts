import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { AdminStudentsComponent } from './admin-students/admin-students.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminStudentsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule, 
    ReactiveFormsModule,
    FormsModule,
    RadioButtonModule, 
    InputNumberModule, 
  ]
})
export class AdminModule { }
