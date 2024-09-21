import { Component, ViewChild } from '@angular/core';
import { UserService } from '../Services/user.service';
import { AuthService } from '../Services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginUser, User } from '../Models/user.model';
import { Router } from '@angular/router';

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
    private authService: AuthService,
    private router: Router
  ) {}
  @ViewChild('loginUser') loginUserForm: NgForm | undefined;
  ngAfterViewInit() {
    console.log('in ng after view init method');

    console.log(this.loginUserForm);
  }
  ngOnChanges() {
    console.log('in ng on changes method');
    console.log(this.loginUserForm);
  }
  onSubmit() {
    console.log('Form submitted.. values of form is..');
    console.log(this.loginUserForm?.value);
    const user: LoginUser = this.loginUserForm?.value;
    this.userService.loginUser(user).subscribe({
      next: (response) => {
        console.log(response);
        this.authService.storeToken(response.token);
        this.router.navigate(['home']);
      },
      error: (err) => alert(err.error.error),
    });
    this.resetForm();
  }

  resetForm() {
    this.loginUserForm?.reset();
  }
}
