import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {
obsMsg;
  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit() {

    //Of
    const Obs1 = of('Anup','Shekhar','Sharma');

    Obs1.subscribe(res=>{
      console.log(res);
      this._designUtility.print(res,'elContainer')
    })



    const Obs2 = of({a:'Anup',b:'Shekhar',c:'Sharma'});

    Obs2.subscribe(res=>{
      this.obsMsg=res;
      console.log('obsMsg=>' ,res);
     /// this._designUtility.print(res,'elContainer1')
    })
  }

}
