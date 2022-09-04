import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'myTasks', component: MyTasksComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
