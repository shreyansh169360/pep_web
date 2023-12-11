//objects also behave in same way as that of arrays . Same ways of creating shallow and deep copy of
let obj = {
        name : 'Shreyansh',
        age : 21,
        marks : {
                tenth : 94,
                twelfth : 99
        }
};

//shallow copy ( upper level consistency , references in nested level)
// #1 spread operator

// let newObj = {...obj};
// newObj.name = 'pawan';
// newObj.marks.tenth = 94.4;
// console.log(obj);
// console.log(newObj);




//----------------------------------------------------------------



// #2 object.assign

// let newObj = Object.assign({}, obj);
// newObj.name = 'pawan'; //change reflected only in newObj
// newObj.marks.tenth = 94.4; // change reflected in obj and newObj
// console.log(obj);
// console.log(newObj);



//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------

//DEEP COPY : JSON.parse(JSON.stringify());

let newObj = JSON.parse(JSON.stringify(obj));
newObj.name = 'pawan'; //change reflected only in newObj
newObj.marks.tenth = 94.4; // change only in newObj
console.log(obj);
console.log(newObj);
