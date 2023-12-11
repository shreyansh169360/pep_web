//CORRESPONDING TO HASHMAPS.
//KEY - VALUE pairs
//syntax : 
//let <mapName> = { <property> : <value> , <property> : <value>, ...};
let cap = {
        name : "Steve",
        lastName : "Rodgers",
        age : 110,
        movies : ["First Avengers " , "Civil War" , "Winter SOldier"],
        isAvenger : false,
        say : function() { console.log("I can do this all day\n");}
};

console.log(cap);
console.log(cap.name);
console.log(cap.movies);
console.log(cap.movies[2]);
//console.log(cap.say());
 cap.say();
 console.log(cap.isAvenger);
 cap.isAvenger= true;
 console.log(cap.isAvenger);


 console.log(cap.movies);
 //changinf movies array...
 cap.movies.push("Avengers : Infinity War" , "Avengers : Endgame");
 console.log(cap.movies);
 //console.log(cap.friend); --> gives undefined as cap.frien is not defines Yet...
 cap.friend = ["Tony" , "Bucky" , "Bruce" , "Thor"];
 console.log(cap.friend);

 //delete key function -> delete
 delete cap.age;
 console.log(cap);

 //accessing a property of an object . by [] and .
 //map.<property_name>
 //map.[property_name as string]  -> used to find if an property belong to a map
 for(let key in cap)
 {
        console.log(key , " : " , cap[key]);
 }