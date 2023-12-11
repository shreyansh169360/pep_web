//return string after deleting all the spaces from initial string
function optionS(content)
{
        let splitArr = content.split('\r\n');
        let newContent = "";
        for(let i = 0 ; i < splitArr.length ;i++){
                if(splitArr[i].length == 0) continue;
                else newContent = newContent + splitArr[i] + '\r\n';
        }
        return newContent;
}

module.exports ={
        optionSKey : optionS
}