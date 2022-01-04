import { Component, OnInit, VERSION } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  sourceSub: Subscription

  ngOnInit() {

    const source = interval(1000);

    this.sourceSub=source.pipe(take(5)
    ,toArray()
    )
    .subscribe(res =>{
      console.log(res)
    
    })

   

  }

}
