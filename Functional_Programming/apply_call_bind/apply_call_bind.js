//in objects , we can also have functions.
//suppose an object
let student1 = {
        name : "Aman",
        maths : 80,
        english : 77,
        physics : 90,
        chemistry : 93,
        student_average : function(){
                let sum = (this.maths + this.english + this.physics + this.chemistry);
                let average = sum/4.0;
                console.log(`${this.name} scored total of ${sum} score with an average of ${average}`);
        }
};

//if we run student1.student_average() then it'll give some O/P;
// student1.student_average();
//say if we have more student objects and for all objs we want to have student_average() , 
//but since , by observation , student_average does not have any parameters/variables which are unique to any specific student object
// => all student objects will have the same student_average() , so what we can do is 

//(FUNCTION-BORROWING)
//using keyword `call`

//we'll let any one object have student_averge() and all other objects will borrow it .
//in our case student1 has the same student_averge();


let student2 = {
        name : "Raj",
        maths : 78,
        english : 67,
        physics : 45,
        chemistry : 56,
}

let student3 = {
        name : "Pratham",
        maths : 89,
        english : 99,
        physics : 96,
        chemistry : 90,
}

let student4 = {
        name : "Aditya",
        maths : 100,
        english : 60,
        physics : 80,
        chemistry : 77,
}

student1.student_average();
student1.student_average.call(student2); // borrow `student1.student_average()`  function  and call it with 'student2'
student1.student_average.call(student3);
student1.student_average.call(student4);

// we can even make the student_average() as global rather than giving it to some function.
//let a function be getSum

let getSum = function(){
        let sum = (this.maths + this.english + this.physics + this.chemistry);
        console.log(`The Total sum of scroes of ${this.name} =  ${sum}`);
}

getSum.call(student1);
getSum.call(student2);
getSum.call(student3);
getSum.call(student4);

//with call() we can also pass extra parameters
let fun = function(rollNo , year_of_graduation){
        let sum = (this.maths + this.english + this.physics + this.chemistry);
        console.log(`Name = ${this.name}`);
        console.log(`sum = ${sum}`);
        console.log(`rollNo = ${rollNo}`);
        console.log(`year_of_graduation = ${year_of_graduation}`);
        console.log("\n");

}

fun.call(student1 , "1",2024);
fun.call(student2 , "2",2022);
fun.call(student3 , "3",2025);


//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------

//APPLY 
//diff b/w apply and call is that external parameters are passed in form of array in case of Apply
fun.apply(student1 , ["1",2024]);
fun.apply(student2 , ["2",2022]);
fun.apply(student3 , ["3",2025]);

//bind does the same job as that of call but does not work immediately , rater it returns a function which when executed , performs its job
let bindFunc = fun.bind(student1 , "1" , "2021");
bindFunc(); // bind wraps up the its functionality in a function which is returned by it  , this function which when executed
                //will do the work;
//bind holds the 'this' functionality of the parent object.