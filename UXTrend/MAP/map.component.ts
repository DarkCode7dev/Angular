import { Component, OnInit, VERSION } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 //Subscription  
   sub1: Subscription;
    sub2: Subscription
   //Messages
   msg1
   msg2;
     constructor() { }
   
     ngOnInit() {
   
       
       const broadCastVideo = interval(1000)
   
   
   //Ex- 01
       this.sub1= broadCastVideo.pipe(
     map(data=>'Video' + data))
       .subscribe(res=>{
        //console.log(res)
       this.msg1 = res;
       })
   
   
        setTimeout(()=>{
   this.sub1.unsubscribe()
        },10000)
  
  
  //Ex- 02
  this.sub2=broadCastVideo.pipe(
    map(data=>data+10)
  )
  .subscribe(res=>{
    //console.log(res);
    this.msg2= res;
  })
  
  setTimeout(()=>{
    this.sub1.unsubscribe();
  },10000)
  
  ////Ex 03
  const members =[
    {id:1, name: 'Anup'},
    {id:2, name: 'Anup'},
    {id:1, name: 'Anup'},
    {id:1, name: 'Anup'},
    {id:1, name: 'Anup'},
  ]
   
     }
 }
