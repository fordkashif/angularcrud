import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faBriefcase, faTrashAlt, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Job } from 'src/app/models/job';
import { JobStore } from 'src/app/services/jobs.store';
import { DeleteObjectDialogComponent } from '../delete-object-dialog/delete-object-dialog.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs$!: Observable<Job[]>;
  jobIcon = faBriefcase
  deleteIcon= faTrashAlt

  constructor(private jobstore:JobStore,public dialog : MatDialog) { }

  ngOnInit() {
    this.jobs$= this.jobstore.jobs;
  }

  openDialog(id:number){
    this.dialog.open(DeleteObjectDialogComponent, {
      data: {
        title: 'Delete A Job',
        content: ' Are you sure you want to delete this Job? ',
        ok: 'Yes',
        cancel: 'No',
        identifier:id
      }
    });


  }

}
