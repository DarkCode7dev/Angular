import { CommonService } from './../../common.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder} from '@angular/forms';

import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  reactiveForm: FormGroup;
  data: any;
  CommonService: any;
@Input() item:string;
@Output() gretEvent = new EventEmitter();
  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.createreactiveForm();
  }


  createreactiveForm() {
    this.reactiveForm = this.fb.group(
      {

         cardOwnerName : ['', Validators.required],
         cardNumber  : ['', Validators.required],
         expirationDate  : ['', Validators.required],
         money  : ['', Validators.required],
      });

  }


  callGreet(){
    this.gretEvent.emit();
  }

}
