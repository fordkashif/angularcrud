
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faFilm, faTrash, faTrashAlt, faUserCircle  } from '@fortawesome/free-solid-svg-icons';
import {  Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { EmployeeStore } from 'src/app/services/employees.store';
import { RESTService } from 'src/app/services/rest.service';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { DeleteObjectDialogComponent } from '../delete-object-dialog/delete-object-dialog.component';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  
})
export class LandingComponent implements OnInit {
  name: string = "joe";
  filmIcon = faFilm;
  userIcon= faUserCircle;
  deleteIcon= faTrashAlt
  trackClick: boolean = false;

  employees$!: Observable<Employee[]>;


  constructor( private employeeStore : EmployeeStore, public dialog : MatDialog) {

   }

  ngOnInit() {
    /**
     * Loads all the employees from the Database
     */
    this.employees$= this.employeeStore.employees;


  }
  /** 
  * Function to check if a job key exists for the employee JSON object
  * @param employee
  */
  checkExistence(employee:object):boolean{
    
    return employee.hasOwnProperty("job")
    
  }
/**
 * 
 * @param id 
 */
  deleteEmployee(id:number){
    this.employeeStore.deleteEmployee(id);
    
  }

  openDeleteDialog(id:number){
    this.dialog.open(DeleteObjectDialogComponent, {
      data: {
        title: 'Delete An Employee',
        content: ' Are you sure you want to delete this employee? ',
        ok: 'Yes',
        cancel: 'No',
        identifier:id
      }
    });
  }

  openEditEmployeeDialog(id:number){
    this.dialog.open(CreateEmployeeComponent, {
     
    });
  }
}
