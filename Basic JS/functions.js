//                      "POINTs"
/*
-> THe declaration of function is preceeded by using ""function"" keyword.

-> THe function dont need return type . They may/maynot return data. if returned, 
   it may be of any type.

-> The functions dont even need datatypes in funct. parameters , it can be any datatype
*/

//--------------------------------------------------------------------------------------------------------------


//fn defination has no return type . it can return any value or even cant reeturn anything
function func()
{
        console.log("Inside a function\n");

}
// the parameter can be datatype-less as it can hold any thing
function func2(param)
{
        console.log("param hols : ",param);

}

func2(10);
func2(10.113);
func2("hello world");
func2(true);
func2([1,2,3,4,5,6,7]);  //[ ...  ,  ...  ,  ...  ,  ...] -> Array

//We can return different types or different values based on any conditional statement
function diff()
{
        let rval = Math.random();
        if(rval < 0.5) return "THe random is less than 0.5"
        else return rval;
}

console.log("Random function generated : ",diff());

