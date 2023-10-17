import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Temp';
   // Reference to the sidenav
   sidenavOpened = false;

   // Function to toggle the sidenav
   toggleSidenav() {
     this.sidenavOpened = !this.sidenavOpened;
   }
 }
