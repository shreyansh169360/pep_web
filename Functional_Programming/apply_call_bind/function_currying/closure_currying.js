function add(a){
        return function y(b){
                console.log(a+b);
        }       
}


let addWith2 = add(2);
addWith2(4);    //6
addWith2(10);   //12
addWith2(50); //52
