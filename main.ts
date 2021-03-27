class car{
    speed:number;
    constructor(){
        this.speed=30;
    }
    
    acc(){
        this.speed+=50;
    }
    
    checkspeed(){
        console.log(`The speed is ${this.speed}`)
    }
}


let obj = new car;
obj.checkspeed();
obj.acc();
obj.checkspeed();