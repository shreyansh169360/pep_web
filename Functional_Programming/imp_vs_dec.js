//imperative way v/s declarative way in JS
//scenario : given a number  , return wheter the square of the number is even

//Imperative way : focus on each steps ( how to perform the task)
// const a = 8;
// let isEven;
// const Square = a*a;
// if(Square % 2 == 0) 
// {
//         isEven = true;
// }
// else{
//         isEven = false;        
// }

// console.log(isEven);


//declarative way
const isEven = (a) => (a*a)%2 == 0 ? true : false;
console.log(isEven(4));

