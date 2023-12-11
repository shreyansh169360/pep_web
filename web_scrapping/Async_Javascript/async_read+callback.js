//we will demonstrate how to use and the need of async function.
let fs = require("fs");

// let data = fs.readFileSync(f1.txt);  ---> this is a sync read.
//sync_read -> when this function is called , then the processor leaves the code and works on fetching 
//              the txt file . If the file size is great , then sync read can take too much time
//              to solve this we use ASYNC JS FUNCTION , the data/file will be fetched by other 
//              core of the processor while the current working of the code will ocntinue;

console.log("before file read");
let data = fs.readFile("f1.txt" , cb); //callback (cb) function
function cb(err , data){
        if(err)
        console.log(err);
        else
        console.log("data is -> \n"+data);
}
console.log("after the file read");

