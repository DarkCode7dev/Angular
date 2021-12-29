import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  obsMsg;
  videoSubscription : Subscription;
  constructor(private _designUtility: DesignUtilityService) { }
  ngOnInit() {
    const broadCastVideos = interval(1000);
   this.videoSubscription = broadCastVideos.subscribe(res=>{
      console.log(res)
      this.obsMsg = 'Video' + res;

      this._designUtility.print(this.obsMsg,'elContainer')
      this._designUtility.print(this.obsMsg,'elContainer2')
      this._designUtility.print(this.obsMsg,'elContainer3')

      if (res>=5) {
        this.videoSubscription.unsubscribe()
      }

    })
  }
/*print(val, containerId){
  let el = document.createElement('li');
  el.innerText = val;
  document.getElementById(containerId).appendChild(el)
}*/
}
