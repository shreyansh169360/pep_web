// in node JS we have certain module to get some functionalities
//to use those module we use require keyword

let cp = require("child_process");

//https://www.minitool.com/news/run-program-from-cmd.html goto this toh find openning commands
cp.execSync("calc");
cp.execSync("code");
cp.execSync("start explorer");
cp.execSync("start chrome https://www.pepcoding.com"); 


//CHILDPROCESS MODULE HELPS US TO EXEC. ANY OTHER LANG. FILE IN ITS CHILD PROCESS
let out = cp.execSync("node 5_sample.js");
console.log(""+out);