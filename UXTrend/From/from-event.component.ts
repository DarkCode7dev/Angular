import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.scss']
})
export class FormEventComponent implements OnInit, AfterViewInit {

  constructor(private _designUtility: DesignUtilityService) { }
  
  @ViewChild('addBtn') addBtn:ElementRef
  ngOnInit() {
    
  }


  ngAfterViewInit(): void {
    let count =1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res=>{
      let countVal = 'Video' + count++
      console.log(countVal);
      this._designUtility.print(countVal,'elContainer2');
    })
  }


 
}
