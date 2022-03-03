import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/dialog-data';
import { EmployeeStore } from 'src/app/services/employees.store';
import { JobStore } from 'src/app/services/jobs.store';

@Component({
  selector: 'app-delete-object-dialog',
  templateUrl: './delete-object-dialog.component.html',
  styleUrls: ['./delete-object-dialog.component.css']
})
export class DeleteObjectDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private employeeStore : EmployeeStore,
  private jobStore:JobStore) { }

  ngOnInit(): void {
  }


processDeleteRequest(type:String,id:number){
  type.toLowerCase().includes("employee")?
  this.deleteEmployee(id) :
  this.deleteJob(id)
}
deleteEmployee(id:number){
  this.employeeStore.deleteEmployee(id);
  
}
deleteJob(id:number){
  this.jobStore.deleteJob(id);
}

}
