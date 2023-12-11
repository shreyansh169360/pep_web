/*
promises are used as a better alternative to Callbacks ( delayed execution).
-> promises are equivalent of tokens in real life. ( service <-> token ; token <-> token)
-> tokens holds some value / data which will be used in later future.
-> it is provided by JS and by its libraries 
-> token is provided by the libraires whose services we are availing ( also we can create aour own proms using promises class)

*/


//------------------------------------------------------------------------------------------------------------------------

let fs = require("fs");
//Reading a file asyncly using callback

// console.log("Before");
// fs.readFile("F1.txt" , function(err , data){
//         console.log(""+data);
// });
// console.log("After");

//------------------------------------------------------------------------------------------------------------------------

//reading a file asyncly using promises.
//here promises are provided by fs

console.log("Before");
let promise = fs.promises.readFile("F1.txt"); //here we dont get the data , but get the promise that the file will be read 
console.log(promise);

/*
we see that initially , when we printed the promise , it showed the current status as PENDING. which is understandable
as the promises.readFile works asyncly i.e. the file is read afterwards but we get a token/promise signifying that some 
work/outcome will be genrated.

the outcome can be of 2 types
        -> fulfilled(sucess)
        ->Reject(failure)
to handle each outcome , we use then() with promises.
*/

promise.then(function(data){    //if the promise is fullfilled  , then execute this function
        console.log("" + data);
});
promise.catch(function(err){
        console.log("error occured : \n" + err);   //if the promise is failes , then execute this function 
})
console.log("After");
