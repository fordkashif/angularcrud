import { Component, OnInit } from '@angular/core';
import { faBars, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { version } from 'package.json'



@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  menuIcon = faBars;
  employeeTab = faUsers;
  createTab=faUserPlus
  public version : string = version;

  ngOnInit(): void {
  }

}
