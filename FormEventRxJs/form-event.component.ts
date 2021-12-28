import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.scss']
})
export class FormEventComponent implements OnInit, AfterViewInit {

  constructor() { }
  
  @ViewChild('addBtn') addBtn:ElementRef
  ngOnInit() {
    
  }


  ngAfterViewInit(): void {
    let count =1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res=>{
      let countVal = 'Video' + count++
      console.log(countVal);
      this.print(countVal,'elContainer2');
    })
  }


  print(val, containerId){
     let el = document.createElement('li');
     el.innerText = val;
     document.getElementById(containerId).appendChild(el)
  }

}
