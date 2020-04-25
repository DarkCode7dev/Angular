//HostListener is a type of method Decorator
import { Component , HostListener} from '@angular/core';

export class AppComponent {
  title = 'Sahosoft Sollution';
   @HostListener('click',['$event'])
  onhostclick(event:Event)
  {
    alert("hello");
  }

}
