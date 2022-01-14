
import { Component, VERSION, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { toArray, filter } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

data;
data2;
data3;

datArr = [
  {id: 1, name:'Anup', gender: 'Male'},
  {id:2, name:'Priyanka', gender: 'Female'},
  {id:3, name:'Ashish', gender:'Male'},
  {id:4, name:'Vivek', gender:'Male'},
  {id:5, name:'Janet', gender:'Female'},
  {id:6, name:'Mounika', gender:'Female'},
  {id:7, name:'Rajesh', gender:'Male'},
  {id:8, name:'Sanjana', gender:'Female'},
  {id:9, name:'Neha', gender:'Female'},
  {id:10, name:'Sakshi', gender:'Female'},
  {id:11, name:'Neeraj', gender:'Male'},
  {id:12, name:'Pardeep', gender:'Male'}
]
  ngOnInit(){
    const source = from(this.datArr)
    
    //Ex-01 - Filter by length
    
    source.pipe(
      filter(member=>member.name.length>6),
      toArray()
    )
    .subscribe(res=>{
      console.log(res)
      this.data= res;
    })
    
    
     //Ex-02 - Filter by gender
    
    source.pipe(
      filter(member=>member.gender=='Male'),
      toArray()
    )
    .subscribe(res=>{
      console.log(res)
      this.data2= res;
    })
    
    
      //Ex-03 - Filter by nth Item
    
    source.pipe(
     filter(member=>member.id<=8),
      toArray()
    )
    .subscribe(res=>{
      console.log(res)
      this.data3= res;
    })
    
  }
}
