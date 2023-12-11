//let is way to declare variables like 'var' keyword.
//unlike var , let doesNot support redeclaration of variables in same scope
//ex :->

/*
let s;  //Declaration Only
console.log("value  of s at line 7 = " , s); //Undef. since during hoisting to code , all declared cariables are given undef.
s = 10; //initialization
console.log("value  of s at line 9 = " , s); //10

let s; //REDECLAR. -> GIVES ERROR.
*/

//Note that the error is given at very beginn. although codewise the printing order should be
//      -> "value of s at line 7 = undefined"
//      -> "value of s at line 9 = 10"
//      **error**

//This happens because the error is genrated during hoisting , note that all the declarations are 
//done before the running of code , thats why the error is generated w/o printing anything before

//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------
/*

//TDZ -> temporal DeadZone. -> area b/w line 1 of code (Starting ) and the first declaration of a variable
// in tdz the variable isn't accesible (unlike in case of 'var' , where there is no concept of block scope)
//eg :->
//  ------------T.D.Z--------------------//
//  ------------T.D.Z--------------------//
//  ------------T.D.Z--------------------//
console.log("Hello ");
console.log("the value of l in tdz = " , l); //error , since 'l' isn't assessible in its tdz
//  ------------T.D.Z--------------------//
//  ------------T.D.Z--------------------//
let l;
console.log("(tdz concept) value of l  at l.no. 37 = " , l);
l = 10;
l=567;
console.log("(tdz concept) value of l  at l.no. 40 = " , l);


//Note that in this case we have got 1 printing ("Hello") -> hoisting is completed and during executiontime
//the error had occured

*/
