url   ===========  https://www.youtube.com/watch?v=8s-c6eylW_s&list=PL_qizAfcpJ-OzHcVcH_K7jZHHp4LqKVob&index=25
app.componenet.ts=====================
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
 templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true

})

export class AppComponent {
  title = 'Sahosoft Sollution!';
  
  cols: number = 3;
  bdr: number = 5;
  constructor() {}

  firstname: string = 'Devesh';
  }
app.component.html=============================

<h1>Welcome to {{title}}</h1>
<h2>Attribute Binding example</h2>
<table [attr.border]="bdr" hieght='200' width='400'>
    <tr>
        <td [attr.colspan]="cols">Student DEtails</td>
    </tr>
    <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Class</td>
    </tr>
    <tr>
        <td>101</td>
        <td>Dev</td>
        <td>10</td>
    </tr>
</table>
<app-test></app-test>
<router-outlet></router-outlet>
