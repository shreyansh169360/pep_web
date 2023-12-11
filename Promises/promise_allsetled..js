// Promise.allSettled takes array of promises and return the promise holding object with 2 keys : 'status' and 'value' . 
// 'status' : holds either' fulfilled' or 'rejected'. allSettled.then is executed when all promises are fulfilled.
// allSettled.catch is executed when any promise is rejected . in either case parameters of then and catch holds the object

let p1 = new Promise(function(resolve, reject) {
        resolve(`p1 is resolved`);
});


let p2 = new Promise(function(resolve, reject) {
        resolve(`p2 is resolved`);
        // reject(`p2 is rejected`);
});


let p3 = new Promise(function(resolve, reject) {
        //resolve(`p3 is resolved`);
        reject(`p3 is rejected`);
});

let p = Promise.allSettled([p1 , p2 , p3]);
p.then((data) => console.log(data))
.catch((data) => console.log(data));