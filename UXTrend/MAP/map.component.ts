import { Component, OnInit, VERSION } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
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
    map(data=>data*10)
  )
  .subscribe(res=>{
    //console.log(res);
    this.msg2= res;
  })
  
  setTimeout(()=>{
    this.sub2.unsubscribe();
  },10000)
  
  ////Ex 03
  const members =from([
    {id:1, name: 'Anup'},
    {id:2, name: 'Pankaj'},
    {id:3, name: 'Tanmay'},
    {id:4, name: 'Ashish'},
    {id:5, name: 'Husnain'},
    {id:6, name: 'Rajesh'},
    {id:7, name: 'Vivek'},
    {id:8, name: 'Janet'}
  ])
  
  members.pipe(
    map(data=>data.name)
  )
  .subscribe(res=>{
    console.log(res);
    this.print(res,'elContainer')
  })
   
     }
 print(val,containerId){
   let el = document.createElement('li');
   el.innerText= val;
   document.getElementById(containerId).appendChild(el);
 }
 
 }
