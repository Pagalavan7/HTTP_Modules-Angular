import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { User } from '../Models/user.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  constructor(private userService: UserService) {}
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
      next: (response) => console.log(response),
    });
    this.createUserForm?.reset();
  }
}
