import { Component, NgModule, OnInit } from '@angular/core';
import { AUTService } from '../../AUTService/aut-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app.sidebar.component.html'
})
export class AppSidebarComponent implements OnInit {
  autRequestList;
  myname = 'jitu';

  constructor(private autService: AUTService ) {}

  ngOnInit() {
     this.autRequestList = this.autService.getListOfAllRequests();
     console.log(this.autRequestList);
  }
}
