import { Component, OnInit, VERSION } from '@angular/core';
import { from, interval, timer, fromEvent } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  
  randomNames=['Anup', 'Shekhar','Sharma','Uxtrend','John','Alex','Robert']
  
  
  ngOnInit(){
    
    const nameSource = from(this.randomNames);
    

   
     //Ex-01 | Take
    nameSource.pipe(
      take(5)
    )
    .subscribe(res=>{
      console.log(res);
      this.print(res,'elContainer')
    })
    
    
    
    
    
     //Ex-02 | TakeLast
    nameSource.pipe(
      takeLast(5)
    )
    .subscribe(res=>{
      console.log(res);
      this.print(res,'elContainer2')
    })
    
    
    
    
      //Ex-03 | TakeLast
       const source= interval(1000)
       let condition1 = timer(5000);
        let condition2 = fromEvent(document,'click');
       
    source.pipe(
      map(res=>'Number' + res),
      takeUntil(condition2)
    )
    .subscribe(res=>{
      console.log(res);
      this.print(res,'elContainer3')
    })
  }
  
  
  
   print(val,containerId){
   let el = document.createElement('li');
   el.innerText= val;
   document.getElementById(containerId).appendChild(el);
 }
}
