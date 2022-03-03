import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { Employee } from '../models/employee';
import { Job } from '../models/job';
import { RESTService } from './rest.service';

@Injectable({
  providedIn: 'root'
})

/**
 * This class will handle all the logic for sending requests to our REST endpoints 
 * that handle Job records.
 */

export class JobStore {
  private subject = new BehaviorSubject<Job[]>([]);
  jobs: Observable<Job[]> = this.subject.asObservable();
  public errors:string = '';

  constructor(private restService: RESTService) {
    this.retrieveAllJobs();
  }

/**
   * This method handles the response request to get all the jobs from the DB
   */

  public retrieveAllJobs() {
    this.restService.retrieveAllJobs().pipe(
      map(res => Object.values(res)),
      catchError(error => {
        const message = " Could not load list of jobs";
        console.log(message)
        return throwError(error);
      })).subscribe(jobs => this.subject.next(jobs));


  }

  /**
   * This method handles the response request to create a job in the DB
   */

  public createJob(job: any): Observable<any> {
    let jobslist = this.subject.getValue();
    console.log( "List before",jobslist)
    //Usage of the spread
    let newjobList :any;
   
    
    let observableResponse = this.restService.createAJob(job);
    
    observableResponse.pipe(
      map(job => newjobList = job)
    )
    .subscribe(
      res=>{
        newjobList = [...jobslist,newjobList]
        console.log("List after",newjobList)
        this.subject.next(newjobList)
      },
      error=>{
       this.errors="The Job could not be created"
      
      }

    )
    console.log("Observable Body:",observableResponse)
    return observableResponse;

  }

   /**
   * This method handles the response request to remove a job from the DB
   */
  deleteJob(id: number) {
    this.restService.deleteAJob(id).pipe(
      map(res => Object.values(res)),
      catchError(error => {
        const message = " Could not load new list of jobs";
        console.log(message)
        return throwError(error);
      })).subscribe(jobs => this.subject.next(jobs));


  }

}
