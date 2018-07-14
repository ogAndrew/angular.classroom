import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component'; //moved


@NgModule({
  imports: [CommonModule],
  declarations:[SkillsComponent], //added to declarations array
  exports: [ SkillsComponent]
})
export class SkillsModule { }
