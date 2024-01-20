import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PasswordStrength } from '../../core/enums/strength.enum';
import { PasswordStrengthSection } from '../../core/enums/password-strength-section.enum';
import { SectionColor } from '../../core/enums/section-color.enum';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.css'
})
export class PasswordStrengthComponent implements OnChanges {

  @Input() currentStrength!: string ;

  easySectionColor!: SectionColor;
  mediumSectionColor!: SectionColor;
  strongSectionColor!: SectionColor;

  // currentStrength - make setter OR use ngOnChanges() to know when currentStrength is changed

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes as any).currentStrength) {
      this.getSectionsColor();
    }
  }
  
  
  getSectionsColor() {
  
      if (this.currentStrength === PasswordStrength.EMPTY) { 
        this.easySectionColor = SectionColor.GRAY;
        this.mediumSectionColor = SectionColor.GRAY;
        this.strongSectionColor = SectionColor.GRAY;
      }

      if (this.currentStrength === PasswordStrength.WEAK) {
        this.easySectionColor = SectionColor.RED;
        this.mediumSectionColor = SectionColor.RED;
        this.strongSectionColor = SectionColor.RED;
      }

      if (this.currentStrength === PasswordStrength.EASY) {
        this.easySectionColor = SectionColor.RED;
        this.mediumSectionColor = SectionColor.GRAY;
        this.strongSectionColor = SectionColor.GRAY;
      }
      
      if (this.currentStrength === PasswordStrength.MEDIUM) {
        this.easySectionColor = SectionColor.YELLOW;
        this.mediumSectionColor = SectionColor.YELLOW;
        this.strongSectionColor = SectionColor.GRAY;
      }
      
      if (this.currentStrength === PasswordStrength.STRONG) {
        this.easySectionColor = SectionColor.GREEN;
        this.mediumSectionColor = SectionColor.GREEN;
        this.strongSectionColor = SectionColor.GREEN;
      }
    } 
  
  // getSectionColor(sectionName: PasswordStrengthSection): SectionColor {
  
  //   switch (this.currentStrength) {
  //     case PasswordStrength.EMPTY:
  //       return SectionColor.GRAY;
  //     case PasswordStrength.WEAK:
  //       return SectionColor.RED;
  //     case PasswordStrength.EASY:
  //       return sectionName === PasswordStrengthSection.EASY ? SectionColor.RED : SectionColor.GRAY;
  //     case PasswordStrength.MEDIUM:
  //       return sectionName != PasswordStrengthSection.STRONG ? SectionColor.YELLOW : SectionColor.GRAY;
  //     case PasswordStrength.STRONG:
  //       return SectionColor.GREEN
  //     default:
  //       return SectionColor.UNKNOWN; 
  //   }
  // }

}
