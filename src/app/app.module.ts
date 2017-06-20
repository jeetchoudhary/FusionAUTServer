import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './UI/main/app.component';
import { AppNavigationBarComponent } from './UI/navbar/app.navbar.component';
import { AppCenterComponent } from './UI/center/app.center.component';
import { AppSidebarComponent } from './UI/sidebar/app.sidebar.component';
import { AppFooterComponent } from './UI/footer/app.footer.component';
import { AutRequestFormComponent } from './AUTRequest/aut.form.component';
import { AUTService } from './AUTService/aut-service';

export function ConfigLoader(configService: AUTService) {
    return () => configService.getListOfAllRequests();
}

@NgModule({
  declarations: [
    AppComponent,
    AppNavigationBarComponent,
    AppCenterComponent,
    AppSidebarComponent,
    AppFooterComponent,
    AutRequestFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AUTService,
    { provide: APP_INITIALIZER, useFactory: ConfigLoader, deps: [AUTService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule  implements OnInit {
  constructor(private autService: AUTService ) {}
  ngOnInit() {
     this.autService.getListOfAllRequests();
  }
}
