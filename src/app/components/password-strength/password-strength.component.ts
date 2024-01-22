import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PasswordStrength } from '../../core/enums/strength.enum';
import { SectionColor } from '../../core/enums/section-color.enum';
import { PasswordService } from '../../core/services/password.service';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.css'
})
export class PasswordStrengthComponent implements OnChanges {

  @Input() password!: string ;
  @Input() showPassword: boolean = false;
  currentStrength!: string ;

  easySectionColor!: SectionColor;
  mediumSectionColor!: SectionColor;
  strongSectionColor!: SectionColor;

  constructor(private passwordService: PasswordService){}

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes as any).password) {
      this.password = (changes as any).password.currentValue;
      this.currentStrength = this.passwordService.getPasswordStrength(this.password);
      this.getSectionsColor();
    }
  }

  getSectionsColor() {
  
      if (this.currentStrength === PasswordStrength.EMPTY) { 
        this.easySectionColor = SectionColor.GRAY;
        this.mediumSectionColor = SectionColor.GRAY;
        this.strongSectionColor = SectionColor.GRAY;
      }else if (this.currentStrength === PasswordStrength.WEAK) {
        this.easySectionColor = SectionColor.RED;
        this.mediumSectionColor = SectionColor.RED;
        this.strongSectionColor = SectionColor.RED;
      }else if (this.currentStrength === PasswordStrength.EASY) {
        this.easySectionColor = SectionColor.RED;
        this.mediumSectionColor = SectionColor.GRAY;
        this.strongSectionColor = SectionColor.GRAY;
      }else if (this.currentStrength === PasswordStrength.MEDIUM) {
        this.easySectionColor = SectionColor.YELLOW;
        this.mediumSectionColor = SectionColor.YELLOW;
        this.strongSectionColor = SectionColor.GRAY;
      }else if (this.currentStrength === PasswordStrength.STRONG) {
        this.easySectionColor = SectionColor.GREEN;
        this.mediumSectionColor = SectionColor.GREEN;
        this.strongSectionColor = SectionColor.GREEN;
      }
    } 
}
