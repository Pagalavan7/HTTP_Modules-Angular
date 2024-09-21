import { Component, ViewChild } from '@angular/core';
import { UserService } from '../Services/user.service';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../Models/user.model';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}
  @ViewChild('createUser') createUserForm: NgForm | undefined;
  ngAfterViewInit() {
    console.log('in ng after view init method');

    console.log(this.createUserForm);
  }
  ngOnChanges() {
    console.log('in ng on changes method');
    console.log(this.createUserForm);
  }
  onSubmit() {
    console.log('Form submitted.. values of form is..');
    console.log(this.createUserForm?.value);
    const user: User = this.createUserForm?.value;
    this.userService.createUser(user).subscribe({
      next: (response) => {
        console.log(response);
        this.authService.storeToken(response.token);
      },
      error: (err) => console.log(err),
    });
    this.resetForm();
  }

  resetForm() {
    this.createUserForm?.reset();
  }
}
