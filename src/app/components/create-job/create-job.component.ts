import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JobStore } from 'src/app/services/jobs.store';


@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {
  
  wholeNumberPattern = /^[0-9]\d*$/
  createJobFormController = new FormGroup({
    title: new FormControl('',[
      Validators.required
    ]),
    position: new FormControl('',[
      Validators.required
    ]),
    salary: new FormControl('',[
      Validators.required,
      Validators.max(100000),
      Validators.pattern(this.wholeNumberPattern)
    ])
   
  })
  constructor(private jobstore:JobStore,private snackBar : MatSnackBar) { }

  ngOnInit(): void {
  }

  createJob(){
    let partialJob = this.createJobFormController;
    console.log(partialJob.value)
    let response = this.jobstore.createJob(partialJob.value)
    if (this.jobstore.errors==''){
      partialJob.reset();
      this.snackBar.open('Job Created Successfully')._dismissAfter(1500);

    }else{
      this.snackBar.open('Job could not be created. Invalid Inputs!')._dismissAfter(1500);

    }
  }

}
