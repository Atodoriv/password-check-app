import { Component, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { PasswordStrength } from "../../core/enums/strength.enum";
import { PasswordService } from "../../core/services/password.service";
import { PasswordStrengthComponent } from "../password-strength/password-strength.component";

@Component({
  selector: 'app-password',
  standalone: true,
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    PasswordStrengthComponent
  ],
})
export class PasswordComponent {
  passwordForm: FormGroup;
  currentStrength: string = '';

  constructor(private formBuilder: FormBuilder, private passwordService: PasswordService) {
    this.passwordForm = this.formBuilder.group({
      password: ['', Validators.minLength(8)],
    });

 
    this.passwordForm.get('password')?.valueChanges.subscribe((value) => {
      this.currentStrength = this.passwordService.getPasswordStrength(value);
    });
  }
  
}
