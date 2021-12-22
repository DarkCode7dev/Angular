import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promoise',
  templateUrl: './promoise.component.html',
  styleUrls: ['./promoise.component.scss']
})
export class PromoiseComponent implements OnInit {

  constructor() { }
 promiseVal;
    DellAvailable(){
     return false
    }

    HpAvailable(){
     
        return false
      
    }

  ngOnInit() {
    // let buyLaptop = new Promise(function (resolve, reject) {
    // resolve(`Promise is resolved`);
    // });

    let buyLaptop = new Promise((resolve, reject)=> {
      // resolve(`Promise is resolved`);
     // reject(`Promise is reject`);

     if (this.DellAvailable()) {
     return setTimeout(()=>{
      resolve(`Dell is Purchased`)
      }, 3000)
      
     }else if (this.HpAvailable()) {
      return setTimeout(()=>{
        resolve(`Hp is Purchased`)
        }, 3000)
      
     }else{
      return setTimeout(()=>{
        reject(`Laptop is not available`)
        }, 3000)
      
      
     }
      });

    buyLaptop.then(res=>{
      console.log(`then code=> ${res}`);
      this.promiseVal=res;
    }).catch(res=>{
      console.log(`catch code=> ${res}`);
      this.promiseVal=res;
    }
      
      )

  }


 
}
