import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../../models/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  authForm: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required]),
    psw: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) {}

  onSubmit() {
    const login = this.authForm.get('login')?.value;
    const psw = this.authForm.get('psw')?.value;

    const authUser: IUser = {
      login: login,
      psw: psw,
    };

    this.http
      .post<{ access_token: string; id: string }>(
        'http://localhost:3000/user/login/' ,
        authUser
      )
      .subscribe(
        (data) => {
          authUser.id = data.id;
          this.userService.setUser(authUser);
          const token: string = data.access_token;
          this.userService.setToken(token);
          this.userService.setToStore(token);

          console.log('authUser', authUser)

          this.router.navigate(['exercises']);
        },
        (err: HttpErrorResponse) => {
          console.log('err', err);
        }
      );
  }
}
