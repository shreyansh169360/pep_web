//in functional programming we want Immutability ie the functions/js elements must not change the state of the enviornment;
//ex. in case of objects

let ob1 ={
        name : "OB1",
        age : 24
};

let ob2 = ob1; // ob2 is NOT the deep copy of ob1 rather it holds the reference of ob1. Changing ob2 will change ob1
// console.log(ob1);
// console.log(ob2);

// ob2.name = 'Hello';
// console.log(ob1);
// console.log(ob2);


//to avoid this we can use object.assign() or spread operator ...
let ob3 = Object.assign({},ob1);
console.log(ob1);
console.log(ob3);

ob3.name = 'Hello';
console.log(ob1);
console.log(ob3);




let ob4 = {...ob1};
console.log(ob1);
console.log(ob4);

ob4.name = 'Darkk';
console.log(ob1);
console.log(ob4);
