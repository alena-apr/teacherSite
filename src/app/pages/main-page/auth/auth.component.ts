import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  authForm: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required]),
    psw: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])  
  });


  onSubmit() {
    console.log(this.authForm.value)
  }
}
