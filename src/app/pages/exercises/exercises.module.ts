import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisesComponent } from './exercises/exercises.component';
import { GrammarComponent } from './grammar/grammar.component';
import { ExescisesRoutingModule } from './exescises-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ExercisesComponent, GrammarComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, ExescisesRoutingModule],
})
export class ExercisesModule {}
