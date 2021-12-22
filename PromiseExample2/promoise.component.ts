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
     return true
    }

    HpAvailable(){
     
        return false
      
    }
//object hai
    dell ={
      brand: 'Dell',
      hardDisk: '2 TB',
      color: 'Black'
    }
//object hai
    hp={
      brand: 'Hp',
      hardDisk: '1 TB',
      color: 'Silver'
    }

    notAvil ={
      brand: 'Not Available',
     status: 'Failed'
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
      resolve(this.dell)
      }, 3000)
      
     }else if (this.HpAvailable()) {
      return setTimeout(()=>{
        resolve(this.hp)
        }, 3000)
      
     }else{
      return setTimeout(()=>{
        reject(this.notAvil)
        }, 3000)
      
      
     }
      });

    buyLaptop.then(res=>{
      console.log('then code=>',res);
      this.promiseVal=res;
    }).catch(res=>{
      console.log('catch code=> ',res);
      this.promiseVal=res;
    }
      
      )

  }

  
 
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

