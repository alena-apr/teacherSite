import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentItemRoutingModule } from './student-item-routing.module';
import { StudentItemComponent } from './student-item/student-item.component';


@NgModule({
  declarations: [
    StudentItemComponent
  ],
  imports: [
    CommonModule,
    StudentItemRoutingModule
  ]
})
export class StudentItemModule { }
