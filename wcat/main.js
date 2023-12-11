let fs = require("fs");
let readObj = require("./read");
let optionSObj = require("./optionS");
let optionNObj = require("./optionN");
let optionBObj = require("./optionB");
let log = console.log;

let inputArr = process.argv.slice(2);
let options = [];
let files = [];
for(let i = 0 ; i < inputArr.length ; i++){
        if(inputArr[i].charAt(0) == '-')
        options.push(inputArr[i]);
        else
        files.push(inputArr[i])
}


let validOptions = new Set();
validOptions.add("-n");
validOptions.add("-s");
validOptions.add("-b");

if(files.length == 0) 
{
        log("Please Enter the valid File Name(s)");
        process.exit();
}

let isAllExists = true;
for(let i = 0;i<files.length ;i++)
{
  if(!fs.existsSync(files[i]))
      {
              log(files[i]," doesn't exist . Please Enter the Valid FileName");
              isAllExists = false;
      }
}
if(isAllExists == false) process.exit();




isAllExists = true;
for(let i = 0;i<options.length ;i++)
{
  if(!validOptions.has(options[i]))
      {
              log(options[i]," is not a valid option . Please Enter the Valid option (-n / -b / -s)");
              isAllExists = false;
      }
}
if(isAllExists == false) process.exit();

//MAIN WORK STARTS....

let content = readObj.readKey(files);
if(options.length == 0)                 // IF NO OPTION IS GIVEN.
{
        log(content);
        process.exit();
}

let executedOptions = new Set();
let processedContent = content;
for(let i = options.length - 1 ; i>=0 ;--i)
{
        let op = options[i]
        if(executedOptions.has(op)) continue;
        if((op == "-n" && (executedOptions.has("-b"))) || (op == "-b" && (executedOptions.has("-n"))))
          continue;
       switch(op)
       {
               case "-n" :  processedContent = optionNObj.optionNkey(processedContent);
                            executedOptions.add("-n");
                            break;
                case "-b" :  processedContent = optionBObj.optionBKey(processedContent);
                             executedOptions.add("-b");
                              break;
                case "-s" :  processedContent = optionSObj.optionSKey(processedContent);
                             executedOptions.add("-s");
                              break;
                
       }
       
}
log(processedContent);
