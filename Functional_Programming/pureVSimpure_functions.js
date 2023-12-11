//pure function is such a function that do not change the external state of the enviornment
//for ex. do not change the global variables or does not intreact with std. I/O; etc


        
// examples of impure functions :

const g = 10;

function impure(a){
        console.log("Hello world!"); //this is impure since it is interacting with std-out using console.log
        console.log(a + g);  //this is impure since it is interacting with global variable 'g'
}

// impure(30);

//------------------------------------------------------------------------------------------------------------------------------

function pure(a , b){
        let result = a+b;
        return {string : "hello world" , res : result};
}

const obj = pure(g , 30);
console.log(obj.string);
console.log(obj.res);

