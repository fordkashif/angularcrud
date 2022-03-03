import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { Employee } from '../models/employee';
import { RESTService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
/**
 * This class will handle all the logic for sending requests to our REST endpoints 
 * that handle employee records .
 */
export class EmployeeStore {
  private subject = new BehaviorSubject<Employee[]>([]);
  employees: Observable<Employee[]> = this.subject.asObservable();
  public errors: boolean = false;

  constructor(private restService: RESTService) {
    this.retrieveAllEmployees();
  }

  /**
   * This method handles the response request to get all the employees from the DB
   */

  public retrieveAllEmployees() {
    this.restService.retrieveAllEmployees().pipe(
      map(res => Object.values(res)),
      catchError(error => {
        const message = " Could not load list of employees";
        console.log(message)
        return throwError(error);
      })).subscribe(employees => this.subject.next(employees));


  }

 /**
   * This method handles the response request to create an employee in the DB
   */

  public createEmployee(employee: any): Observable<any> {
    let employeeslist = this.subject.getValue();
    console.log("List before create ", employeeslist)
    //Usage of the spread
    let newemployeeList: any;

    let observableResponse = this.restService.createAnEmployee(employee)
    observableResponse.pipe(
      map(employee => newemployeeList = employee)

    ).subscribe(
      res => {
        newemployeeList = [...employeeslist, newemployeeList];
        console.log("List after create", newemployeeList)
        this.subject.next(newemployeeList)
      },
      error => {
        this.errors = error;
      }

    )
    console.log("Observable Body :", observableResponse)
    return observableResponse;


  }

 /**
   * This method handles the response request to remove an employee from the DB
   */
  
  deleteEmployee(id: number) {
    this.restService.deleteAnEmployee(id).pipe(
      map(res => Object.values(res)),
      catchError(error => {
        const message = " Could not load new list employees";
        console.log(message)
        return throwError(error);
      })).subscribe(employees => this.subject.next(employees));


  }

}
