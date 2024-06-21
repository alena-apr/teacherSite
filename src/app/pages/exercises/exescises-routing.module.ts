import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercisesComponent } from './exercises/exercises.component';
import { GrammarComponent } from './grammar/grammar.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent,
    children: [
      {
        path: 'start',
        component: ExercisesComponent,
      },
      {
        path: 'grammar',
        component: GrammarComponent,
      },
      // {
      //   path: 'grammar/exercise/:id',
      //   loadChildren: () =>
      //     import('../exercises/grammar-item/grammar-item.module').then(
      //       (m) => m.GrammarItemModule
      //     ),
      // },
    ],
  },
  // { path: 'grammar', component: GrammarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExescisesRoutingModule {}
