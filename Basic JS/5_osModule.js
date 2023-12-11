//to get the info of hardware(OS) , used in backend to get the info on which 
//software is running

let cp = require("os");
console.log(cp.arch())  //ARCHITECTURE (x32 or x64)
console.log(cp.platform()) //PLATFORM (windows/linux/mac..etc)
console.log(cp.networkInterfaces()) //Network details
console.log(cp.cpus())    //info of CPU cores(processor)
