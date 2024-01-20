import { Injectable } from "@angular/core";
import { PasswordStrength } from "../enums/strength.enum";

@Injectable(
  {providedIn: "root"}
  )

export class PasswordService {
    
  getPasswordStrength(password: string): PasswordStrength {
    // const password = this.passwordForm.get('password')?.value || '';
  
  
    if (password.length === 0) {
      return PasswordStrength.EMPTY;
    }
  
    if (password.length < 8) {
      return PasswordStrength.WEAK;
    }
  
    if (/^[a-zA-Z]+$/.test(password) || /^[0-9]+$/.test(password) || /^[^a-zA-Z0-9]+$/.test(password)) {
      return PasswordStrength.EASY;
    }
  
    if (/^[a-zA-Z0-9]+$/.test(password) || /^[a-zA-Z^0-9]+$/.test(password) || /^[^a-zA-Z^0-9]+$/.test(password)) {
      return PasswordStrength.MEDIUM;
    }
  
    if (/[a-zA-Z]+/.test(password) && /[0-9]+/.test(password) && /[^a-zA-Z0-9]+/.test(password)) {
      return PasswordStrength.STRONG;
    }

    return PasswordStrength.UNDEFINED
  }
}