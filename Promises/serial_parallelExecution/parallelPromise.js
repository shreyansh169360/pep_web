// here we'll read file parallely using promise(earlier we did by callback);
const fs = require('fs');
let promise1 = fs.promises.readFile('./serial_parallelExecution/f1.txt');
let promise2 = fs.promises.readFile('./serial_parallelExecution/f2.txt');
let promise3 = fs.promises.readFile('./serial_parallelExecution/f3.txt');

promise1.then((data) => console.log(' '+data));
promise2.then((data) => console.log(' '+data));
promise3.then((data) => console.log(' '+data));

//note that order of o/p is variable. This is because the files are read in parallel manner
