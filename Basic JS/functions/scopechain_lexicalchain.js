// console.log(varname);
// var varname = 10;
// function fn(){
//         console.log(varname);
//         var varname = 20;
//         console.log(varname);
// }
// fn();

//If in a function , a variable is used but it is noe defined in the function , then the control l
//looks for that variable outside the fn . outside the function means the execution context outside 
//the fn defin. not the scope outside the func. call.

console.log("Line 14 -> ",varname);
var varname = 10;
console.log("Line 16 -> ",varname);
function b(){
        console.log("Line 18 -> " , varname);   //here the varname isn't present in scope of b()
}                                               // so the control checks outside of b() ( which is the outside of b() defin. not the a() -> from where b() is called).

function a(){
        console.log("Line 22 ->",varname);
        var varname = 20;
        b();
        console.log("Line 25 ->",varname);

}
a();
// fn();