import { Component, ViewChild } from '@angular/core';
import { UserService } from '../Services/user.service';
import { TokenService } from '../Services/token.service';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginUser } from '../Models/user.model';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private userService: UserService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  @ViewChild('loginUser') loginUserForm: NgForm | undefined;

  errorMsg: string | null = null;

  ngAfterViewInit() {
    console.log('in ng after view init method');

    console.log(this.loginUserForm);
  }
  ngOnChanges() {
    console.log('in ng on changes method');
    console.log(this.loginUserForm);
  }

  displayErrorMsg(err: HttpErrorResponse) {
    this.errorMsg = err.error.error;
    console.log('Inside error msg display: ', this.errorMsg);
    setTimeout(() => {
      this.errorMsg = null;
    }, 3000);
  }

  onSubmit() {
    console.log('Form submitted.. values of form is..');
    console.log(this.loginUserForm?.value);
    const user: LoginUser = this.loginUserForm?.value;
    this.userService.loginUser(user).subscribe({
      next: (response) => {
        console.log(response);
        this.tokenService.storeToken(response.token);
        this.resetForm();
        this.router.navigate(['home']);
      },
      error: (err) => {
        console.log(err);
        this.displayErrorMsg(err);
      },
    });
  }

  resetForm() {
    this.loginUserForm?.reset();
  }
}
