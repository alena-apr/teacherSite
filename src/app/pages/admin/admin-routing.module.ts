import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
  path: '', 
  component: AdminDashboardComponent
  }, 
  {
    path: 'add', 
    component: AdminComponent
  }, 
  // {
  //   path: 'students', 
  //   component: 
  // }, 
  // {
  //   path: 'student/:id', 
  //   component:
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
