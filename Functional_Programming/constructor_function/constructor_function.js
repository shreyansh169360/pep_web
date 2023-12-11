//if we want to create the pbjects having same properties but different values , we can use
//constructor functions.
//CFs are the blueprint acc to whuch an empty obj is filled with some properties



function car(brand , model , color){
        // though we are aware of the fact that inside a function , 'this' holds a global object
        //but when a constructor function is called(using new keyword) , 'this' holds a empty object
        console.log(this);
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.drive = function(){
                console.log(`Hello I am driving ${this.model}`);
        }
}

let car1 = new car('BMW' , 'X5' , 'white');
console.log(car1)
car1.drive();