const fs = require('fs');
let promise1 = fs.promises.readFile('./f1.txt');
let promise2 = fs.promises.readFile('./f2.txt');
let promise3 = fs.promises.readFile('./f3.txt');


promise1.then((data) =>{
        console.log(''+data);
        return promise2;
}).then((data) =>{
        console.log(''+data);
        return promise3;
}).then((data) =>{
        console.log(''+data);
}) 