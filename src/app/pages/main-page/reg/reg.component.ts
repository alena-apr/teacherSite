import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from '../../../validators/psw';
import { createEmailValidator } from '../../../validators/email';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.scss'
})
export class RegComponent implements OnInit {
  regForm: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required]),
    psw: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      createPasswordStrengthValidator(),
    ]),
    pswRepeat: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      createPasswordStrengthValidator(),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      createEmailValidator(),
    ])
  });

  isPswSame: boolean = true;

  // login: string | undefined;
  // psw: string | undefined;
  // pswRepeat: string | undefined;
  // email: string | undefined;

  constructor() { }

  ngOnInit(): void {
    // this.regForm = new FormGroup({
    //   login: new FormControl('', [Validators.required]), 
    //   psw: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(6),
    //     createPasswordStrengthValidator(),
    //   ]),
    //   pswRepeat: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(6),
    //     createPasswordStrengthValidator(),
    //   ]),
    //   email: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(5),
    //     createEmailValidator(),
    //   ])
    // })
  }

  registration(e: any) {
    console.log(e);
    console.log('registration', this.regForm.value);
  }

  onSubmit() {
    console.log('onSubmit', this.regForm.value);

    const login = this.regForm.get('login')?.value;
    const psw = this.regForm.get('psw')?.value;
    const pswRepeat = this.regForm.get('pswRepeat')?.value;
    const email = this.regForm.get('email')?.value;

    this.checkPsw(psw, pswRepeat);
  }

  checkPsw(psw1: string, psw2: string): boolean {
    if (psw1 !== psw2) {
      this.isPswSame = false;
      return false;
    }
    return true;
  }

}
