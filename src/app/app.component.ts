import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PasswordComponent } from './components/password/password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    PasswordComponent,
    ReactiveFormsModule,
    PasswordStrengthComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'password-check-app';
}
