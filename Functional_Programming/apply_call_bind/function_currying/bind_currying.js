// when a function is created , it accepts some parameters , some times we want to make some parameters as constant
//i.e. whenever a function is called that value of some parameters  is remained same

//Ex:
function add(a , b) {
        c  = a + b;
        console.log(c);
}

//if we want add()'s "a" have a constant value of 5 , then we need to curry it.
//currying can be done in 2 ways : 1) Bind currying , 2) closure currying

//Bind currying 
//we bind the required function with 'this'(remember 'this' holds an empty obj in global env)

let addWith5 = add.bind(this , 5) //we made a = 5 , for all cases 
addWith5(3) // b = 3; as a is already fixed.

let addWith5and2 = add.bind(this ,5,2)
addWith5and2();