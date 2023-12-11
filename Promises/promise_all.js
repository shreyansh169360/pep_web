// promises.all([...]) accepts a array of promises and return a promise iff all promises are resolved 
// if even one promise is rejected catch block of returned promise(of promise.all)is executed.

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


let promiseAll = Promise.all([p1 , p2 ,p3]);
promiseAll.then(function(param){        //then is called when all promises are resolved and param will have the returned value of each promise
        console.log(param);     
}).catch(function(err){         //catch is run if even one promise is rejected. err holds the message passed to reject() of the rejected promise
        console.log(err);
})