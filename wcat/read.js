
function read(files)
{
        let fs = require('fs');
        let content = "";
        for(let i = 0 ;i < files.length ;i++)
        {
                 let buffer = fs.readFileSync(files[i]);
                 content = content + buffer + '\r\n';
        }
        return content;
}
module.exports ={
        readKey : read
}