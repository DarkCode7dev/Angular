export class AppComponent {
  title = 'Sahosoft Sollution';

  constructor(@Inject(MyserviceService) myserviceService){
    console.log(myserviceService);
    console.log("hi, this is component");
  }
  }
