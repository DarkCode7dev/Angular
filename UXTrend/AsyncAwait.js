// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
// resolve('Data recieved')
//     },3000);
// })


// //Whenever we add async in front of function it always return Promise
// async function getData() {
//     let response = await promise;
//     console.log(response);
// }

// getData()



let result1 =document.getElementById('result1');
let result2=document.getElementById('result2');
let result3=document.getElementById('result3');




let dell= {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'Black'
}
let buyLaptop = new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve(dell)
    },3000);
})

let buyLaptop2 = fetch('http://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
// .then(json => console.log(json))

//Promiser
function fetch1() {
    
    result1.innerText ='Fetching data';

    buyLaptop.then(res=>{
        console.log(res)
        result1.innerText = JSON.stringify(res);
    })
}

//Async /Await

async function fetch2() {
    result2.innerText ='Fetching data.........';

    let data = await buyLaptop;
    result2.innerText = JSON.stringify(data)
    console.log(data)

}

// function fetch3() {
//     result3.innerText ='Fetching data..';
//     buyLaptop2.then(res=>{
//         console.log(res)
//         result3.innerText=JSON.stringify(res);
//     })
// }


async function fetch3() {
    result3.innerText ='Fetching data..';
    let res = await buyLaptop2;
        result3.innerText=JSON.stringify(res);
    
}