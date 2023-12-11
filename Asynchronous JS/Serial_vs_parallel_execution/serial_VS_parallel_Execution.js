// multiple async callbacks can execute either in parallel way or in serial way(if we make it)

//parallel callbacks execution
let fs = require('fs');
// fs.readFile('f1.txt' , 'utf8' , cb1);
// fs.readFile('f2.txt' , 'utf8' , cb2);
// fs.readFile('f3.txt' , 'utf8' , cb3);

// function cb1(err , data) {
//         if(err)
//         console.log(err);
//         else
//         console.log(" "+data);
// }
// function cb2(err , data) {
//         if(err)
//         console.log(err);
//         else
//         console.log(" "+data);
// }
// function cb3(err , data) {
//         if(err)
//         console.log(err);
//         else
//         console.log(" "+data);
// }




//serial callbacks execution
fs.readFile('f1.txt' , 'utf8' , cb1);
function cb1(err , data) {
        if(err) 
        console.log(err);
        else{
                console.log(" "+data);
                fs.readFile('f2.txt' , 'utf8' , cb2);
                function cb2(err, data){
                        if(err)
                        console.log(err);
                        else{
                                console.log(" "+data);
                                fs.readFile('f3.txt' , 'utf8' , cb3);
                                function cb3(err , data) {
                                        if(err)
                                        console.log(err);
                                        else
                                        console.log(" "+data);
                                }

                }
        }
}
}