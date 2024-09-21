import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
