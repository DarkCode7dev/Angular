import { Component, VERSION, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, toArray, pluck } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  data
  data2
  users = [
    {
      name: 'Anup',
      skills:'Angular',
      job:{
        title:'Frontend Developer',
        exp: '10 Years'
      }
    },
    {
      name: "Uxtrends",
      skills: 'Html,Css',
      job:{
        title:'Html Developer',
        exp: '10 Years'
      }
    },
    {
      name:'john',
      skills:'Angular',
      job:{
        title:'UI Developer',
        exp: '10 Years'
      }
    },
    {
      name: 'Alex',
      skills: 'Javascipt',
      job:{
        title:'Javascipt Developer',
        exp: '10 Years'
      }
    }
  ]

    ngOnInit(){
     
     //Ex-01
      from(this.users).pipe(
       // map(data=> data.name),
       pluck('name'),
        toArray()
      )
      .subscribe(res=>{
        console.log(res)
        this.data=res;
      })
      
      
      //Ex -02 Output
//       0: "Frontend Developer"
// 1: "Html Developer"
// 2: "UI Developer"
// 3: "Javascipt Developer"
// length: 4
// [[Prototype]]: Array(0)

      from(this.users).pipe(
        pluck('job','title'),
        toArray()
      )
      .subscribe(res=>{
        console.log(res);
        this.data2= res;
      })
    }   
  
}
