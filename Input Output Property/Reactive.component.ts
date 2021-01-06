import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Reactive',
  templateUrl: './Reactive.component.html',
  styleUrls: ['./Reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  ParentItem= 'Welcome to gym portal';
  constructor() { }

  ngOnInit() {
  }
greet(){
  alert("Data Saved");
}

}
