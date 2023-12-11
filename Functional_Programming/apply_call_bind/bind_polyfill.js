let show = function(){
        console.log(`${this.name}  ${this.age}  `);
}

let person1 = {
        name: 'Adam',
        age : 25
};

Function.prototype.myBind = function(...args){
        let obj = this; //this holds the function with which myBind is called
        console.log(obj);
        return function(){
                obj.call(args[0]);
        }
}

let showDetails = show.myBind(person1);
showDetails();




//when functions has some external parameters

let show2 = function(city , state){
        console.log(`${this.name}  ${this.age}  ${city} ${state}`);

}

Function.prototype.myBind2 = function(...args){
        let func = this; 
        let parameters = args.slice(1) //all parameters except object name
        return function(){
                func.apply(args[0], parameters);
        }
}

let showDetails2 = show2.myBind2(person1 , 'Lucknow' , 'UP');
showDetails2();