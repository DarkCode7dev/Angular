import { Component, OnInit, VERSION } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  myColor: string=''
  ngOnInit(){
    const source = interval(1500);
    
    
  //   //Ex-01
  //   const Arr= ['Anup', 'Shekhar','Sharma','Uxtrendz','John','Alex']
    
  //   let obsSubscription : Subscription;
    
    
  //  obsSubscription= source.pipe(
  //    tap(res=>{
  //      console.log('tap before=>' + res)
  //      if(res==4){
  //        obsSubscription.unsubscribe();
  //      }
  //    }),
  //     map(res=>Arr[res] 
  //     ),
  //     tap(res=> console.log('tap after=>' + res))
  //   )
  //   .subscribe(res=>{
  //     console.log(res)
  //     this.print(res,'elContainer')
  //   })
    
    
    
       //Ex-02
    const Colors= ['Red', 'Green','Blue','Orange','Yellow','Purple']
    
    let obsSubscription2 : Subscription;
    
    
   obsSubscription2= source.pipe(
     tap(res=>{
       this.myColor= Colors[res]
       console.log('tap=>' + res)
        if(res==7){
         obsSubscription2.unsubscribe();
       }
      
     }),
      map(res=>Colors[res] 
      )
    )
    .subscribe(res=>{
      console.log(res)
      this.print(res,'elContainer2')
    })
  }
    
  
  
  
  

  
  print(val,containerId){
   let el = document.createElement('li');
   el.innerText= val;
   document.getElementById(containerId).appendChild(el);
 }
}
