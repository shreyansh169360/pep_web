// reduce takes 3 args => array , cb , accumulator
let myArr = [1,2,3,4,5];
function myPolyfillreduce(arr , cb , acc , init){
        let ret;
        acc = init;
        for(let i = 0 ; i < arr.length;i++){
                acc = cb(arr[i] , acc);
        }
        ret = acc;
        return ret;
}

function add(x,y){
        return x+y;
}
let a
console.log(myPolyfillreduce(myArr, add,a,0));