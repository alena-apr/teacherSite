import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  phraseNumber: any;

  // phraseNumber: FormGroup = new FormGroup({
  //   phraseNumber: new FormControl('', Validators.required)
  // });

  formGroup: FormGroup;

  ngOninit() {}

  createExercise() {}

  createFormGroup(questionsNumber: number[]): FormGroup {
    let group: any = {};
    questionsNumber.forEach((question: number, index: number) => {
      group[question] = new FormControl('', Validators.required);
    });
    return new FormGroup(group);
  }
  checkNumber() {
    console.log(this.phraseNumber);
  }

  // initFormGroupFromArray(data: any[], root = true): FormGroup[] {
  //   if (Array.isArray(data)) {
  //     const dataArr = data.map((row) => {
  //       if (root) {
  //         // entry point
  //         //         const key = this.setRowTypeKey(row?.name);
  //         return this.recursFormControllerBuilder(row);
  //       } else {
  //         return this.recursFormControllerBuilder(row);
  //       }
  //     });
  //     return dataArr;
  //   }
  // }
  // // main function for dynamic reactive form builder
  // recursFormControllerBuilder(row): FormGroup {
  //   const controlObject: any = {};
  //   if (typeof row === 'object') {
  //     for (const prop in row) {
  //       if (Array.isArray(row[prop])) {
  //         // TODO check logic for additional logic
  //         controlObject[prop] = this._fb.array(
  //           this.initFormGroupFromArray(row[prop])
  //         );
  //       } else {
  //         if (row[prop] && typeof row[prop] === 'object') {
  //           if (row[prop] instanceof Date) {
  //             controlObject[prop] = new FormControl(
  //               new Date(row[prop]).toISOString()
  //             );
  //           } else {
  //             controlObject[prop] = this.recursFormControllerBuilder(row[prop]);
  //           }
  //         } else {
  //           controlObject[prop] = new FormControl(row[prop]);
  //           controlObject.yearBalanceUniqKey = new FormControl('');
  //         }
  //       }
  //     }
  //   } else {
  //     controlObject.value = new FormControl(row);
  //   }
  //   return new FormGroup(controlObject);
  // }
}
