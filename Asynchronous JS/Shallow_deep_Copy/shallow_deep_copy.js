// reference data types such as array, object etc just maintain one reference of the data type
// i.e. no matter how many copies u make of an array/obj it still reference to same data
// and changing one instance of data will change all instances/copies of data

let arr = [1,2,3,4,5];
let copy_arr = arr;
//we change in copy_arr , but the changes will also be reflected in arr.
copy_arr[2] = 30;
console.log(arr);
console.log(copy_arr);

//shallow copy : when we make copy in such a way that if copy is changed at first/upper level
// it is not affected in original array but if copy array is changed at nested level , changes are affected in original array

//ways of shallow copy : 
// #1 : spread operator

let a = [1,2,3,4,['a' , 'b' , 'c']];
let copy_a = [...a];
copy_a[0] = 10; //only affected in copy_a
copy_a[4][1] = 'z'; //affected in both a and copy_a
console.log(a);
console.log(copy_a);





// #2 : Array.from

let b = [1,2,3,4,['a' , 'b' , 'c']];
let copy_b = Array.from(b);
copy_b[0] = 10; //only affected in copy_b
copy_b[4][1] = 'z'; //affected in both b and copy_b
console.log(b);
console.log(copy_b);




// #3 : <array_name>.slice(0);

let c = [1,2,3,4,['a' , 'b' , 'c']];
let copy_c = c.slice(0);
copy_c[0] = 10; //only affected in copy_c
copy_c[4][1] = 'z'; //affected in both c and copy_c
console.log(c);
console.log(copy_c);



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//DEEP COPIES  : completely differently copies at all levels
// way of creating Deep copy 

//JSON.parse(JSON.stringify());
let d = [1,2,3,4,['a' , 'b' , 'c']];
let copy_d = JSON.parse(JSON.stringify(d));
copy_d[0] = 10; //only affected in copy_d
copy_d[4][1] = 'z'; //only affected in copy_d
console.log(d); //  d remains completely intact
console.log(copy_d);