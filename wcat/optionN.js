
//takes a string onaaining contents ,return a string that has a Line No. after each newLine
function optionN(content){
        let lineNo = 2;
        let newContent = "1.  ";
        for(let i = 0 ; i < content.length ; i++)
        {
             newContent = newContent + content.charAt(i);
             if(content.charAt(i) == '\n')
             { 
                     newContent = newContent +   lineNo.toString() + ".  ";
                      lineNo += 1;
             }
        }
        return newContent.substring(0,(newContent.length  - 3 - (lineNo-1).toString().length));;
}

module.exports = {
        optionNkey : optionN
}