import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class RESTService {
  private RESTAPIServerBase = 'http://localhost:8080/RESTWebApp/api/v1/';
  private AllEmployeesEndpoint = this.RESTAPIServerBase + 'employees/all';
  private NewEmployeeEndpoint = this.RESTAPIServerBase + 'employees/new';
  private deleteEmployeeEndpoint = this.RESTAPIServerBase + 'employees/';
  private AllJobsEndpoint = this.RESTAPIServerBase + 'jobs/all';
  private NewJobEndpoint = this.RESTAPIServerBase + 'jobs/new';
  private deleteJobEndpoint = this.RESTAPIServerBase + 'jobs/';

  constructor(private httpClient: HttpClient) {}

  /**
   * This function initiates a HTTP request to retrieve all employee records
   * and shares the response with all observables subscribed to the request
   */

  public retrieveAllEmployees() {
    return this.httpClient.get(this.AllEmployeesEndpoint).pipe(shareReplay());
  }
  /**
   * This function initiates a HTTP request to create an employee record by passing
   * an Employee object to the REST Endpoint
   */

  public createAnEmployee(payload: any) {
    console.log(payload);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.post(this.NewEmployeeEndpoint, payload).pipe(
      catchError((err) => {
        const message = 'Could not create employee';
        console.log(message, err);

        return throwError(err);
      }),
      shareReplay()
    );
  }

  /*
This function initiates a HTTP request to delete a employee record by passing the ID to the 
REST endpoint 
*/

  public deleteAnEmployee(id: number) {
    console.log('Passed ID', id);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.delete(this.deleteEmployeeEndpoint + id).pipe(
      catchError((err) => {
        const message = 'Could not delete employee ';
        //console.log(message, err);

        return throwError(err);
      }),

      shareReplay()
    );
  }

  /**
   * This function initiates a HTTP request to retrieve all jobs records
   * and shares the response with all observables subscribed to the request
   */

  public retrieveAllJobs() {
    return this.httpClient.get(this.AllJobsEndpoint).pipe(shareReplay());
  }

  /**
   * This function initiates a HTTP request to create an employee record by passing
   * an Employee object to the REST Endpoint
   */

  public createAJob(payload: any) {
    console.log(payload);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.post(this.NewJobEndpoint, payload).pipe(
      catchError((err) => {
        const message = 'Could not create job';
        //console.log(message, err);

        return throwError(err);
      }),

      shareReplay()
    );
  }

  /*
   * This function initiates a HTTP request to delete a job record by passing the ID to the
   * REST endpoint
   */

  public deleteAJob(id: number) {
    console.log('Passed ID', id);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.delete(this.deleteJobEndpoint + id).pipe(
      catchError((err) => {
        const message = 'Could not delete job ';
        //console.log(message, err);

        return throwError(err);
      }),

      shareReplay()
    );
  }
}
