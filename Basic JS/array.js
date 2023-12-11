//syntax ->  let arr = [__ , __ , __ , __ , ...]
let arr = [10,20,"HELLO",40.246235];
console.log(arr);
console.log(arr.length,"\n\n");
for(let i = 0 ; i < arr.length ; i++)
console.log(arr[i]);
//for(let i in arr)
//console.log(arr[i]);

//functions
//push -> to push data in back
//unshift -> to push data in front
//pop -> removes last element
//shift -> removes first element;
arr.push("This is the last value");
arr.unshift(true);
console.log("\n\n",arr);
arr.pop();
arr.shift();
console.log(arr);

// arr.slice(<start_index> , <end_index>) -> return a subarray starting from start_index
        // and ending at end_index - 1;
        //RETURNS an ARRAY
console.log(arr.slice(1,4))

//arr.splice(index , count) -> removes element from original array from given index 
// and removes "count" number of element

console.log(arr.splice(2,2)); // Returns the Deleted part
console.log(arr); //return the remaining part;


