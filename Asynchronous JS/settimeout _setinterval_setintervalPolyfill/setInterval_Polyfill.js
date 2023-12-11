//setInterval ka Polyfill
//we need 2 functions 1)own setInterval()   2) clearInterval

function create(){

        let intervalId = 0;
        let intervalMaps = {};

        function setIntervalPolyfill(callback , delay){
                let currId = intervalId++;

                function repeat(){
                        intervalMaps[currId] = setTimeout(() => {
                                callback();
                                if(intervalMaps[currId]){
                                        repeat();
                        }
                        }, delay);
                        
                }
                repeat();
                return currId;
        }


        function clearIntervalPolyfill(interval_id){
                let requiredTimeoutId = intervalMaps[interval_id];
                clearTimeout(requiredTimeoutId);
                delete intervalMaps[interval_id]; 
        }

        return {setIntervalPolyfill ,  clearIntervalPolyfill};
}


const {
        setIntervalPolyfill, clearIntervalPolyfill
} = create();

let counter = 0;
sayHi = () => {
        counter++ ; 
        console.log("Hi"); 
        if(counter >= 3){
                clearIntervalPolyfill(Id);
        }}

let Id = setIntervalPolyfill(sayHi , 2000);



