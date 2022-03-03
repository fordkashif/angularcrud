import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeDialogData } from 'src/app/models/employee-dialog-data';
import { EmployeeStore } from 'src/app/services/employees.store';

@Component({
  selector: 'app-edit-employee-dialog',
  templateUrl: './edit-employee-dialog.component.html',
  styleUrls: ['./edit-employee-dialog.component.css']
})
export class EditEmployeeDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: EmployeeDialogData, private employeeStore : EmployeeStore,
  )  { }

  ngOnInit(): void {
  }

}
