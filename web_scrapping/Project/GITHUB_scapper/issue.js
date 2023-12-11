const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const pdfkit = require("pdfkit");
let log = console.log;


function getissue(url , topicName , repoName){
        request(url , cb);
        function cb(err , response , html){
                if(err) {
                        console.log("ERROR DETECTED");
                }
                else{
                        // log(html);
                        issues(html);
                }
        }
        
        function issues(html)
        {
                let $ = cheerio.load(html);
                let issueElemArr = $(".Box-row.Box-row--focus-gray.p-0.mt-0.js-navigation-item.js-issue-row");
                let issuearr = [];
                for(let i = 0 ; i < issueElemArr.length ; i++){
                       let issueLink =  $(issueElemArr[i]).find("a").attr("href"); 
                       issuearr.push(`https://github.com/${issueLink}`);
                }
                // log(topicName , "     " ,issuearr)

                let folderpath = path.join(__dirname , topicName);
                dircreater(folderpath); //to check wheter the parent (topic folder) exist
                // let filepath = path.join(folderpath , repoName + ".json");
                // fs.writeFileSync(filepath , JSON.stringify(issuearr));
                let filepath = path.join(folderpath , repoName + ".pdf");
                let pdfDoc = new pdfkit;
                let textToPut = JSON.stringify(issuearr);
                pdfDoc.pipe(fs.createWriteStream(filepath));
                pdfDoc.text(textToPut);
                pdfDoc.end();
        }
         



}

module.exports = getissue;

function dircreater(path){
        if(fs.existsSync(path) == false)
                fs.mkdirSync(path);
} 