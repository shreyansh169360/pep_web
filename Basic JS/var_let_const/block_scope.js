// variables defined using 'let' nad "const" have bolck scope.
// Rules :->
// if a variable is not even declared in a scope  ,then the variable is searched in upper bloc's scope and so on...
// eg :

let f;
f= 1;
console.log("the value of f in upper scope = " , f);
{
        //new block started
        console.log("The value of f in inner scope = ", f);
        //Note that the f is not decl. in this scope neither before log statement nor after log statement
        //so the f is searched in just ipper scope
}


// but if the variable is declared in the scope then basic hoisting and execution procedure is followed
//eg1:


let k;
k= 10;
console.log("the value of k in upper scope = " , k);
{
        //new block started
        let k;
        console.log("The value of k in inner scope = ", k);
        k = 10000;
        console.log("The value of k in inner scope = ", k);
        //Note that the f is  decl. in this scope 
}

//eg2:
let p;
p= "upper";
console.log("the value of p in upper scope = " , p);
{
        //new block started
        console.log("The value of p in inner scope = ", p);// this gives error as it is in TDZ

        let p;
        p = "inner";
        console.log("The value of p in inner scope = ", p);
        //Note that the f is  decl. in this scope 
}
