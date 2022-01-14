import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  ngOnInit(){
    const Arr= ['Anup', 'Shekhar','Sharma','Uxtrendz','John','Alex']
    const source = interval(1500);
    
    source.pipe(
      map(res=>Arr[res] )
    )
    .subscribe(res=>{
      console.log(res)
    })
  }
 
}
