// let this be a function that may cause some error.
function someFunc(){
        let error = true;
        if(error) console.log(`There was some error . Sorry`);
        else console.log(`TASK ACCOMPOLISHED SUCCESSFULLY`);
}

someFunc();

// but we are unsure whether this function give error or not . so we use promises

let promise = new Promise(function(resolve, reject){
        //write your error function here
        function someFunc(){
                let error = true;
                if(error)
                {
                        // console.log(`There was some error . Sorry`);
                        //if error, call `reject` along with parameters u want to pass to reject();
                        reject(`There was some error . Sorry`);
                }
                else
                {
                // else console.log(`TASK ACCOMPOLISHED SUCCESSFULLY`);
                //if success call `resolve` along with parameters u want to pass to resolve();
                        resolve(`TASK ACCOMPOLISHED SUCCESS`);
                }

        }
        
        someFunc();
});


promise.then(function(param){
        console.log(param);
}).catch(function(err){
        console.log(err);
})