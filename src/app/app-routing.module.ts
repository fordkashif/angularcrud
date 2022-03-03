
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { LandingComponent } from './components/landing/landing.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateJobComponent } from './components/create-job/create-job.component';

const routes: Routes = [
  { path: '', redirectTo: '/Landing', pathMatch: 'full' },
  { path: 'Landing', component: LandingComponent },
  { path: 'CreateEmployee', component: CreateEmployeeComponent },
  { path: 'Jobs', component: JobsComponent },
  { path: 'CreateJob', component: CreateJobComponent },
  {path: '**', redirectTo:'/Landing'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
