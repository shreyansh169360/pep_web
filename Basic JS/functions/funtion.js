//Normal Function
// function sayHello()
// {
//         console.log("hello");
// }

// sayHello();



//                      TAKING PARAMETER W/O GIVING PARAMETER
// function sayHello(param)
// {
//         console.log("parameter is -> ",param);
// }

// sayHello();

// ----------------------------------------------------------------------------------------------------
//.........FUNCTION ARE 1ST CLASS CITIZEN . THEY ARE TREATED AS A VARIABLE........

//FUNCTION EXPRESSION
let fnContainer = function fn(){
                         console.log("I am expression");
                }
fnContainer();



//IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION) - executed just as created on its own
(function IIFE(){
        console.log("I am IIFE");
        console.log("I run on my own");
})();



//Arrow function (usually for smaller functions)
let fn = num => num * num;  //num is a parameter
console.log(fn(4));

let fn2 = (num1 , num2) => num1 * num2; //num1 and num2 are parameters
console.log(fn2(4,2));



//------------------------------------------------------------------------------------------------------

// A function act as a variable
//1. so it can be passed as an argument

// function say(param)
// {
//         console.log("Hello" , param);
//         param();
//         return "qwrqwrqwr";
// }

// function small()
// {
//         console.log("This is small func!!!");
// }

// // say([1,2,3,4]);
// // say(66736);
// // say("adfgadfg");
// say(small);     //here the address of small() is passed



//2.)   FUNCTIONS CAN BE RETURED

function outer()
{
        console.log("Hi I am outer , I am returning Inner()");
        return function Inner(){
                console.log("hello , I am Inner , just returned from outer.😀😀");
        }
}

outer();
rVal = outer();
console.log(rVal);
rVal();