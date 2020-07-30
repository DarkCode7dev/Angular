import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup , FormBuilder, NgForm, Validator, Validators, FormArray, FormArrayName } from '@angular/forms';
import { formsignup } from './formsignup';
import {HttpClientModule} from '@angular/common/http';
import {GithubService} from './services/github.service';


@Component({
  selector: 'app-root',
 templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true

})

export class AppComponent {
  title = 'DEVESH Sollution!';
 
    users: String[];
    constructor(private githubService: GithubService) { }

    getUsers(){
      this.githubService.getData().subscribe((data)=>{
        console.log(data);
        this.users = data;
      })
    }
}
