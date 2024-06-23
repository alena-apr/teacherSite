import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  phraseNumber: any;

  // phraseNumber: FormGroup = new FormGroup({
  //   phraseNumber: new FormControl('', Validators.required)
  // }); 


  formGroup: FormGroup; 

  ngOninit() {

  }

  checkNumber() {
    console.log(this.phraseNumber)
  }

}
