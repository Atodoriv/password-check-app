import { Component, Input, SimpleChanges  } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
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
  
  @Input()passwordForm!: FormGroup;
  showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.passwordForm = this.formBuilder.group({
      password: ['', Validators.minLength(8)],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes as any).passwordForm) {
      this.showPassword = false; 
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
