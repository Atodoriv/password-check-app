import { Injectable } from "@angular/core";
import { PasswordStrength } from "../enums/strength.enum";

@Injectable({
  providedIn: "root"
})
export class PasswordService {
    
  getPasswordStrength(password: string): PasswordStrength {  
    if (password.length === 0) {
      return PasswordStrength.EMPTY;
    }

    if (password.length < 8) {
      return PasswordStrength.WEAK;
    }

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[^a-zA-Z\d]/.test(password);

    if (hasLetters && hasNumbers && hasSymbols) {
      return PasswordStrength.STRONG;
    } else if (hasLetters && (hasNumbers || hasSymbols) || hasNumbers && hasSymbols) {
      return PasswordStrength.MEDIUM;
    } else {
      return PasswordStrength.EASY;
    }
  }
}
