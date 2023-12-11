// custom/self function implementation of HOF using declarative way

//MAP
//map acccept 2 args array nd a callback function which defines the rule of O/P
// let myArr = [1,2,3,4,5];
// let newArr = myArr.map(
//         function(x){            //this is callback
//                 return x*10;    
// });

function myPolyfillMap(arr , cb){
        let newArr = [];
        for(let i = 0 ; i < arr.length ; i++){
                newArr.push(cb(arr[i]));
        }
        return newArr;
}


let myArr = [1,2,3,4,5];
function add10(x){
        return x + 10;
}

let newArr = myPolyfillMap(myArr , add10);
console.log(myArr);
console.log(newArr);