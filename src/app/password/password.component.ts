import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-password',
  standalone: true,
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule
  ],
})
export class PasswordComponent {
  passwordForm: FormGroup;
  private currentStrength: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.passwordForm = this.formBuilder.group({
      password: ['', Validators.minLength(8)],
    });

 
    this.passwordForm.get('password')?.valueChanges.subscribe(() => {
      this.getPasswordStrength();
      this.getSectionColor(0);
      this.getSectionColor(1);
      this.getSectionColor(2);
    });
  }

  getPasswordStrength(): string {
    const password = this.passwordForm.get('password')?.value || '';
  
  
    if (password.length === 0) {
      return 'empty';
    }
  
    if (password.length < 8) {
      return 'weak';
    }
  
    if (/^[a-zA-Z]+$/.test(password) || /^[0-9]+$/.test(password) || /^[^a-zA-Z0-9]+$/.test(password)) {
      return 'easy';
    }
  
    if (/^[a-zA-Z0-9]+$/.test(password) || /^[a-zA-Z^0-9]+$/.test(password) || /^[^a-zA-Z^0-9]+$/.test(password)) {
      return 'medium';
    }
  
    if (/[a-zA-Z]+/.test(password) && /[0-9]+/.test(password) && /[^a-zA-Z0-9]+/.test(password)) {
      return 'strong';
    }

    return ''
  }
  
  getSectionColor(sectionIndex: number): string {
    const passwordStrength = this.getPasswordStrength();
  
    switch (passwordStrength) {
      case 'empty':
        return 'gray';
      case 'weak':
        return 'red';
      case 'easy':
        return sectionIndex === 0 ? 'red' : 'gray';
      case 'medium':
        return sectionIndex < 2 ? 'yellow' : 'gray';
      case 'strong':
        return 'green';
      default:
        return 'unknown'; 
    }
  }
}
