const fs = require('fs').promises;
let arr = ['./serial_parallelExecution/f1.txt' , './serial_parallelExecution/f2.txt' , './serial_parallelExecution/f3.txt'];

let initPromise = fs.readFile(arr[0]);
for(let i = 1 ; i < arr.length ; i++){
        initPromise = initPromise.then((data) => {
                console.log(' '+data);
                return fs.readFile(arr[i]);
        })
}
initPromise.then((data) => console.log(' '+data));

//----------------------------------------------------------------
//Alternative way
// let PromiseArray = arr.map((str) =>fs.readFile(str));
// let init = PromiseArray[0];
// for(let i = 1 ; i < PromiseArray.length ;i++){
//         init = init.then((data) =>{console.log(' '+data); return PromiseArray[i];})
// }
// init.then((data) => {console.log(' '+data)})