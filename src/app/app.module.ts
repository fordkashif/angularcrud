import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DatePipe } from '@angular/common';

import { library } from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { FooterComponent } from './components/footer/footer.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { LandingComponent } from './components/landing/landing.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { JobHolderComponent } from './components/landing/jobHolder/jobHolder.component';
import { CustomeDatePipe } from './customPipes/custome-date.pipe';
import { CreateJobComponent } from './components/create-job/create-job.component';
import { GenericDialogComponent } from './components/generic-dialog/generic-dialog.component';
import { DeleteObjectDialogComponent } from './components/delete-object-dialog/delete-object-dialog.component';
import { EditEmployeeDialogComponent } from './components/edit-employee-dialog/edit-employee-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SideBarComponent,
    JobsComponent,
    FooterComponent,
    CreateEmployeeComponent,
    NotFoundComponent,
    JobHolderComponent,
    CustomeDatePipe,
    CreateJobComponent,
    DeleteObjectDialogComponent,
    GenericDialogComponent,
    EditEmployeeDialogComponent
  ],
  entryComponents: [
    DeleteObjectDialogComponent,
    CreateEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSelectModule,
    MatDialogModule,
    HttpClientModule,

  ],
  providers: [DatePipe,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    library.add(far,fas,fab)
  }
 }
