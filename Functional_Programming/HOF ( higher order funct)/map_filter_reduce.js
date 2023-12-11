//HOF take i/p as function
// Map is a HOF that gives a particular O/P based on some operation on I/P
let myArr = [1,2,3,4,5];
let newArr = myArr.map(
        function(x){            //map accepts a function as a parameter which defines the rule upon which new elments will be generated
                return x*10;    //this is the rule .    NOTE : x belongs to myArr and retrurned val belongs to newArr.
});
console.log(myArr);
console.log(newArr);






//filter is a HOF that filter out some data based on some condition 
let newArr2 = myArr.filter(
        function(x){
                return x%2 == 1; //those elements of myArr that satisfy this condition are put in newArr2
 
});
console.log(myArr);
console.log(newArr2);






//reduce is a HOF that gives a single value corresponding to entire array . just like summing 
// up the array or taking factorial , in either case O/P is single valued corr. to entire array

let sum = myArr.reduce(
        function(accumulator, x){
                return accumulator += x;
        },0
);
console.log(sum);