import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';


@Component({
  selector: 'jobHolder',
  templateUrl: './jobHolder.component.html',
  
})
export class JobHolderComponent {
  @Input()
    passedjob!: Job;

  
  ngOnInit() {

  }
  
}