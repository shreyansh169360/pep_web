//accepts a string . give numbering to the text part only
function optionB(content)
{
        let contentArray = content.split('\r\n')
        let new_content ="";
        let LineNo = 1
        for(let i = 0 ; i < contentArray.length ;i++)
        {
                if(contentArray[i].length != 0)
                {
                        new_content = new_content + LineNo.toString() + ".  " +contentArray[i] +'\r\n'
                        LineNo++;
                }
                else
                        new_content = new_content + '\r\n'
        }
        return new_content;
}

module.exports ={
        optionBKey : optionB
}