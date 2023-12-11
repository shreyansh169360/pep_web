let url = "https://github.com/topics"
const request = require("request");
const cheerio = require("cheerio");
let pagerepo = require("./eachLink.js");
let log = console.log;

request(url , cb);
function cb(err , response , html){
        if(err){
                log("ERROR DETECTED");
        }
        else{
                // log( html );
                getTopicLinks(html);
        }
}


function getTopicLinks(html){
        let $ = cheerio.load(html);
        let linkELementArr = $(".no-underline.d-flex.flex-column.flex-justify-center");
        for(let i = 0 ; i < linkELementArr.length ; i++){
                // let fullLink = "https://github.com"+ $(linkELementArr[i]).attr("href");
                let fullLink = `https://github.com/${$(linkELementArr[i]).attr("href")}`
                // log(fullLink);
                pagerepo(fullLink);
        }
}