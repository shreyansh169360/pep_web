//promise.race are like promises.all . they accept the array of promises and return the outcome of the
//first promise to be fulfilled(either resolved or rejected).

// promise.race also returns a promise (say pr) . pr.then will execute if the first promise to be fulfilled is resolved.
//pr.catch will execute if the first promise to be fulfilled is rejected.

let p1 = new Promise(function(resolve, reject) {
        // resolve(`p1 is resolved`);
        reject(`p1 is rejected`);
});


let p2 = new Promise(function(resolve, reject) {
        resolve(`p2 is resolved`);
        // reject(`p2 is rejected`);
});


let p3 = new Promise(function(resolve, reject) {
        resolve(`p3 is resolved`);
        // reject(`p3 is rejected`);
});


let pr = Promise.race([p1 , p2 , p3]);

pr
.then((data) => console.log(data))
.catch((err) => console.log(err))