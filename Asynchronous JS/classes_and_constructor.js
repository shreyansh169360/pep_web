/*like in java or c++ we can have classes 
*/
class person {
        //in class , to define a function / constructor we need not to give 'function' keyword
        constructor(name , age){
                this.name = name;
                this.age = age;
        }

        showDetails(){
                console.log(`name = ${this.name} and age = ${this.age}`);
        }
}

let p = new person('Shreyansh' , 20);
p.showDetails();