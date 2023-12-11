function getPromise(err)
{
		let p = new Promise(function(resolve , reject){
			if(err == false)
				resolve();
			else
				reject();
		});
                return p;
}

let error = false;
let prom = getPromise(error);
prom.
then(() => console.log('NO error')).
catch(err => console.log('Error Detected'));
