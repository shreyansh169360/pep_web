//USING THIS IN NODE ENV in 'NON-STRICT' MODE

//case 1 : using this in global console.log
console.log(this);      //return empty object


//----------------------------------------------------------------

//case 2: using this in function's cl(console.log)
function f(){
        console.log(this);      //return a global object
}
f();


//----------------------------------------------------------------


// case 3: using this in a function of an object
let obj = {
        name : "Allen",
        f : function(){
                console.log(this);    //return  object Itself
        }
};
obj.f();


//----------------------------------------------------------------

//case 4: using this in a nested function of an object
let obj2 = {
        name : "Allen",
        f : function(){
                function h(){
                        console.log(this); //return global object
                }
                h();
        }
};

obj2.f();