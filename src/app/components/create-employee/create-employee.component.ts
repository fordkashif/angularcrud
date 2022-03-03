import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EmployeeStore } from 'src/app/services/employees.store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { JobStore } from 'src/app/services/jobs.store';
import { Job } from 'src/app/models/job';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEmployeeComponent implements OnInit {
  jobs$!: Observable<Job[]>;
  jobList: Job[] = [];

  createEmployeeFormController = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
    ]),
    lastName: new FormControl('', [
      Validators.required,
    ]),
    dateEmployed: new FormControl('',
      [
        Validators.required
      ]),

    job: new FormControl('')

  });




  constructor(private datePipe: DatePipe, private employeeStore: EmployeeStore, 
    private jobstore: JobStore, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    /**
     * Loads all the jobs from the Database for usage in the dropdown list of jobs 
     * to select from
     */
    this.jobs$= this.jobstore.jobs;
  }

  /**
   * Function to format date to confomr to the format needed by the database
   * @param date 
   */
  formatDate(date: string) {
    const formattedDate = this.datePipe.transform(date, 'YYYY-MM-dd');
    console.log(formattedDate)
    return formattedDate;
  }

  /**
   * Function to return the entire job object nased on the job ID that was entered.
   * This is to be used when selecting a job for an employee
   * @param id 
   */
  grabJobByID(id:number): Job{
    console.log("The id",id);
      let jobtofind: any;
     this.jobs$.subscribe(
      (jobs : Job[])=> jobtofind = jobs.find(p => p.id ==id));

      console.log("theUndefined" ,jobtofind)
      return jobtofind

   
    
  }

  Logger(item:any){
    console.log(item)
  }
  /**
   * Function to pass the form values as a properly formed payload / employee Object 
   * to be handled by the service layer.
   */
  createEmployee() {
  
    let partialEmployee = this.createEmployeeFormController;
    console.log("before",partialEmployee.value)

    //Set the value of the date object to the proper format 
    partialEmployee.patchValue({ dateEmployed: this.formatDate(partialEmployee.controls['dateEmployed'].value) })
    
    //Set the value of the employee's job to the full job object
    partialEmployee.patchValue({job: this.grabJobByID(partialEmployee.get('job')?.value)})
    
    console.log("after",partialEmployee.value)

    let response = this.employeeStore.createEmployee(partialEmployee.value)
    if (!this.employeeStore.errors) {
      partialEmployee.reset();
      this.snackBar.open('Employee Created Successfully')._dismissAfter(1500);
    } else {
      this.snackBar.open('Something went wrong. Please try again...')._dismissAfter(1500);
    }


  }

}
