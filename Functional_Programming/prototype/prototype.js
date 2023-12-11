// there are some functions in array which are supported on some browsers that aren't supported on other 
//browsers . So if we use a function which is not supported by some browsers then there will be problem

//using Array.prototype we can include our custom function into the prewritten prototypes(inbuilt functions)
//of array;

//Example: if we want to display the entire array by using something as : MyArray.show();
//since show() is not in-built so we'll write it and include it in Array.prototype

Array.prototype.show = function(){
        //we dont need to pass the array , since this function is called by array, 'this' keyword hold the array 
        for(let i = 0 ; i < this.length ; i++){
                console.log(this[i]);
        }
}

myArray = [1,2,3,4,5,6,7,8,9,10];
myArray.show();