url====https://www.youtube.com/watch?v=iwmrYYdQUB4&list=PL_qizAfcpJ-OzHcVcH_K7jZHHp4LqKVob&index=21

app.hml=========================================================================
<h2 >Using ngClass as string</h2>
<p [ngClass]="['one','two']">Using ngClass with string example</p>

<div *ngFor ="let user of users" [ngClass]= "'three four'">
    {{user}}
</div>


<p [ngClass]="{'one': true, 'three': false}">Example by using ngClass object</p>

<div [ngClass]="getcssclass( 'mode' )">
    example using ngClass with component method
</div>
=====================================app.css=====================================
.one{

    color: Blue;
    
}
.two{

    font-size:30px;
}

.three{ 

    color: green;
}

.four{ 

    font-size:15px;
}
====================================app.ts===============================

export class AppComponent {
  title = 'Sahosoft Sollution';
  constructor() {}
  users = [
    'Chandan',
    'Ajeet',
    'Mohan',
    'Sohan'
  ];

    getcssclass(flag: string) {
      let cssclass;
      if ( flag == "mode") {
         cssclass = {
           ' one ': true,
           ' two ': true
         };
      } else {
        cssclass = {
          ' one ': false,
          ' two ': true
        };
      }
      return cssclass;
    }

}
