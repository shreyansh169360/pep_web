//FILE OPERATIONS

let fs = require("fs");
const { dirname } = require("path");
//OPERATIONS -> read , write/open , append/update , delete ...



                                //READ
let buffer = fs.readFileSync("5_sample.js");    //This returns a BINARY buffer. this binary then can be converted to the type the opened file is ..
console.log("The binary buffer is -> " , buffer); 
console.log("The data is -> \n" + buffer); // concatenation with string will convert buffer to string.




                //OPENNING AND WRITING TO THE FILE.
// fs.openSync("OpenFile.txt" , "w");  //openSyc creates a file , if not present . "w" represent to open inwritable mode.
//writing
// fs.writeFileSync("OpenFile.txt" , "hello , this is openFile from 5_fileSystem.js");
        // this func. OVERWRITES (trucates)
// fs.appendFileSync("OpenFile.txt" , "\nhello , this is appended Text");





                        //MAKING DIRECTORY
        // fs.mkdirSync("my_Sample_Directory");
// fs.writeFileSync("my_Sample_Directory/newFile.txt" , "hello JI");


                //TO REMOVE A DIRECTORY -> FIRST DELETE ITS CONTENT;
//let content = fs.readdirSync("my_Sample_Directory/toBeDeleted");       //GIVES ARRAY OF NAMES OF FILES
// for(let i = 0 ; i < content.length;i++)
// {
//         console.log("The file named : " , content[i] , " is getting removed\n");
//         fs.unlinkSync("my_Sample_Directory/toBeDeleted/" + content[i]);
// }
//once the content of folder is deleted , folder is ready to be disposed off...
//fs.rmdirSync("my_Sample_Directory/toBeDeleted");



        //              CREATE 10 FOLDER NAMES LECTURE-1 , LECTUR-2 ,....
        //              AND IN EACH FOLDER HAVE A README FILE , CONTAINING SOME CONTENT
for(let i = 1; i <= 10 ;i++)
{
        let dirName = `Lecture-${i}`;
        fs.mkdirSync(dirName);
        fs.writeFileSync(dirName+"\\"+"Readme.txt" , `hello , this is readme - ${i}`);
}

//removing just created folders
for(let i = 1 ; i <= 10; i++)
{
        let dirname = `Lecture-${i}`;
        fs.unlinkSync(dirname + "//Readme.txt");
        fs.rmdirSync(dirname);
}
