import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercisesComponent } from './exercises/exercises.component';
import { GrammarComponent } from './grammar/grammar.component';

const routes: Routes = [
  { path: '', component: ExercisesComponent },
  { path: 'grammar', component: GrammarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExescisesRoutingModule {}
