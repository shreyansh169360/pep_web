//setTimeout(provided by Node) ,as discussed, execute a passed callback after some delay.
//It works asynchronously , means working of main thread continues , at the end NodeAPIs are executed

function greet(){
        console.log("Hello World");
}

// setTimeout(greet, 3000);

console.log("In JS");
//here "In JS" will be printed immediately , and after printing , after 3 second , we'll see "Hello World"


//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------


//SETINTERVAL : execute a function(callback) after some delay repetedily in a infinite loop
function sayHi(){
        console.log('HIIII');
}

// setInterval(sayHi , 2000); //prints 'HIII' Repeatedly in infinite loop alternatively after 2 sec.

// how to stop:(using clearInterval())
        //actually setInterval returns its id , using this id we can control it

let counter = 0;
let intervalId;
function sayHi2(){
        console.log("THis is Hi2");
        counter +=1;
        if(counter >= 3){
                clearInterval(intervalId);
        }
}

intervalId = setInterval(sayHi2, 2000);


