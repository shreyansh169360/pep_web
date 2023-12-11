//filter also accepts 2 parameters one is array and other is a callback function
/* let newArr2 = myArr.filter(
        function(x){
                return x%2 == 1; //those elements of myArr that satisfy this condition are put in newArr2
 
});
*/

function myPolyfillFilter(arr , cb){
        let newArr = [];
        for(let i = 0 ; i < arr.length ; i++){
                if(cb(arr[i])){
                        newArr.push(arr[i]);
                }
        }
        return newArr;
}

myArr = [1,2,3,4,5,6,7];
function iseven( x){
        if(x%2 == 0) return true;
}
console.log(myPolyfillFilter(myArr , iseven));