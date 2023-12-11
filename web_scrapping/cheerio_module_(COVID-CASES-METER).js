const request = require("request");
const cheerio = require("cheerio");

console.log("Before the request to Worldometer covid meter. ");  
request('https://www.worldometers.info/coronavirus/', cb);
console.log("After the request to Wordometer covid website. ");  

function cb(error , response , html){
  if(error)
  {
          console.log("Error has occured");

  }
  else
  {
        html_parser(html);
  }
}

function html_parser(html)
{
let selection_tool = cheerio.load(html);
let array = selection_tool("#maincounter-wrap .maincounter-number span"); 
let l = array.length;
console.log("Total Cases = " , selection_tool(array[0]).text());
console.log("Deaths = " , selection_tool(array[1]).text());
console.log("Recovered = " , selection_tool(array[2]).text());
}

