#!/usr/bin/env node
let Path = require("path");
let fs = require("fs");
//Process id a module of NodeJS. process.argv -> array of command words inputted.

//0th indx -> the path of the 'node' executable
//1st indx -> the path of the file which is typed after node in command
//2nd indx -> command line argument #1
//3rd indx -> command line argument #2
//4th indx -> command line argument #3
//    ..   ->           ...
//    ..   ->           ...
//    ..   ->           ...
// so we slice(get subarray) from index#2 to get the array only containing CommandLineArgs

let log = console.log;

let inputArray = process.argv.slice(2);
//console.log(inputArray);

//console.log(process.argv);

/*Commands ->
1) "tree" -> A DIRECTORY-PATH IS GIVEN . and print the tree version of the directory path,
             representing various subdirectories and files inside it.

2) "organise" -> A DIRECTORY PATH IS GIVEN .  sort/organise the files inside that dirtectory 
                based on different extensions/filetypes.

3) "help" -> to list all commands.
*/

let command = inputArray[0];
let path = inputArray[1];

let types = {
        media:["mp4" , "mkv"],
        archives: ['zip' , '7z' , 'rar' , 'tar' , 'gz' , 'ar' , 'iso' , 'xz'],
        documents: ['docx' , 'doc' , 'pdf' , 'xlsx' , 'xls' , 'odt' , 'ods' , 'odp' , 'odg' , 'odf' , 'txt' , 'ps' , 'rtf'],
        app: ['exe' , 'dmg' , 'pkg' , 'deb'],
        music: ['MP3' , 'mp3' , 'aac' , 'AAC'],
        images: ['jpeg' , 'img' , 'png' , 'jpg']
}  

switch(command)
{
        case "tree": treeFn(path); break;
        case "organize": organizeFn(path); break;
        case "help": help(); break;
        default : console.log("PLease Enter the Valid Command\n");
}

function treeFn(dirPath)
{
        // log("Implementing Tree Command for ",dirPath);

        //checking valid path
     
        if(dirPath == undefined)
        {
               treehelper(process.cwd() , "");  //If no path is given then take " CURRRENT WORKING DIRECTORY"
                return;
        }
        if(fs.existsSync(dirPath))
        {
               treehelper(dirPath , ""); //A helper function
        }
        else
        {
                log("Kindly enter Valid Path");
                return;
        }

}

function organizeFn(dirPath)
{
       // log("Implementing Organize Command for ",dirPath);

       
      // Steps :

      // 1) a path of directory is given.
      let destPath;
        if(dirPath == undefined)
        {
                dirPath = process.cwd();
                // return;
        }
        if(fs.existsSync(dirPath))
        {
               // Create -> "Organise_Folder" ->  directory 
              destPath = Path.join(dirPath , "organise_Directory");       //The path of the folder that needs to bee created
              if(!fs.existsSync(destPath)) //If the "oranise_Directory" is not already present then only create new directory 
              fs.mkdirSync(destPath);
        }
        else
        {
                log("Kindly enter Valid Path");
                return;
        }


      // 2) create a directory named "Organised-directory"
      // 3)   identify the categories of all files present in the given directory
      // 4)  copy/cut - paste the files into respective category in the "organised-Directory"
                //THE ABOVE 3 STEPS ARE DONE BY A HELPER FUNCTION
        
        organiseHelper(dirPath , destPath); // this is the helper finction that will put the
                                            // files of dirPath in "organise_Directory" based on
                                            // their extension.
       
}



function help()
{
        log(`
        List of all commands :
                -> "organize"
                -> "tree"
        `);
}

function organiseHelper(src , dest)
{
        // step 1 : To identify the type of files in "src" directory.
        let fileNames = fs.readdirSync(src); //gives an array of the file names in the "src" folder
       
        //filesName array only contains the Name of fiels.folder present insdide "Src";
        // to get full path , we'll have to join the name with src.
         
         
        for(let i = 0 ; i < fileNames.length ; i++)
        {
                let childAddress = Path.join(src , fileNames[i]); //complete path of a File
                let isFile = fs.lstatSync(childAddress).isFile();
                if(isFile)
                {
                        // /*printing the file names */ log(fileNames[i]);

                        //step 2 : TO CUT/COPY - PASTE THE FILES INTO CORR. CATEGORY
                        let category = getCategory(childAddress);  // A funtion to get Category
                        // log(fileNames[i] , " belongs to : ", category);

                        send_file(childAddress , dest , category); //This function will put the files in  corr. category
                }
                
        }
}


function send_file(src , dest , type)
{
        let typePath = Path.join(dest , type);
        if(fs.existsSync(typePath) == false) //->  the category folder doesn't exist -> create one
        {
                fs.mkdirSync(typePath);
        }

        //TO copy the files , we'll use fs.copyFileSync(<sourceFilePath> , < destinationFilePath >) -> this
        //will copy the CONTENT of < sourceFilePath >  to  < destinationFilePath >

        let baseName = Path.basename(src); // THis will give the name of file + ext (eg. "hello.txt")
        let destFilePath = Path.join(typePath ,  baseName); //we want the copied file of same Name
        fs.copyFileSync(src , destFilePath);
        fs.unlinkSync(src);     //DELETE ORIGINAL FILE AFTER COPYING
        log(baseName , " copied to Category Folder \t" , type);
}
function getCategory(childAddress)      //This function will tell the type (media or archive or doc or app)
{
         let ext = Path.extname(childAddress);
         ext = ext.slice(1); //removing '.'
        //  log(ext);
        for(let i in types) // i will iterate over media , archivs ,documents and apps
        {
                let current_type = types[i]; //current array
                for(let j = 0; j < current_type.length ; j++)
                {
                        if(ext == current_type[j]){
                                return i;       //return the name of array
                        }
                }

        }
        return "others"
}

function treehelper(dirPath , indent)
{
        //is file or folder
        let isFile = fs.lstatSync(dirPath).isFile();
        if(isFile)
        {
                log(indent + "├──" + Path.basename(dirPath));
        }
        else
        { 
                log(indent + "└──" + Path.basename(dirPath));
                let children = fs.readdirSync(dirPath);
                for(let i = 0 ; i < children.length ; i++)
                {
                        let newPath = Path.join(dirPath , children[i]);
                        treehelper(newPath , indent +"\t");
                }
        }
}