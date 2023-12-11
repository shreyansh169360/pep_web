 const { log } = require('console');
let path = require('path');
 let returned_path = path.dirname("C:/Users/91914/OneDrive/Desktop/JS/5_fileSystem.js");
 console.log(returned_path);


 let file_name = path.basename("C:/Users/91914/OneDrive/Desktop/Java/coin_change_combination.java");
console.log(file_name);
 let file_extension = path.extname("C:/Users/91914/OneDrive/Desktop/Java/coin_change_combination.java");
 console.log(file_extension);

 //MOST IMP. 
 let components = path.parse("C:/Users/91914/OneDrive/Desktop/Java/coin_change_combination.java");
 console.log(components);       //components is a object (hashmap)
 console.log(components.root);       
 console.log(components.name);       
 console.log(components.ext); 
 console.log(path.isAbsolute("5_osModule.js"));     
 console.log(path.isAbsolute("C:/Users/91914/OneDrive/Desktop/JS/5_osModule.js"));     
 