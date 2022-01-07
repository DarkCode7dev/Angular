import { Component, VERSION, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.full;
  techStatus;
  ngOnInit(){
    //Ex 01 (Manual)
    
    const cusObs1 = Observable.create(observer=>{
      
      setTimeout(()=>{
         observer.next('Angular')
      },1000)
      
        setTimeout(()=>{
         observer.next('Typescript')
      },2000)
      
        setTimeout(()=>{
         observer.next('Html and css') 
      
      },4000) 
      
        setTimeout(()=>{
         observer.next('Jvascript')
       // observer.error('Limit exceede');   //error ke liye
         //
       
      },6000) 
      
     setTimeout(()=>{
         observer.next('Jquery')
           observer.complete()///age nahi zayega
          
      },10000) 
    })
    
    
    cusObs1.subscribe(res=>{
      console.log(res)
      this.print(res,'elContainer') 
    },
    (err)=>{ this.techStatus='error'},
    ()=>{ this.techStatus='completed'})
  }
  
  
  
  print(val, containerId){
  let el = document.createElement('li');
  el.innerText = val;
  document.getElementById(containerId).appendChild(el)
}
}


