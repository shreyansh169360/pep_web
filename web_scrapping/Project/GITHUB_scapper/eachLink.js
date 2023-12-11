const request = require("request");
const cheerio = require("cheerio");
const issue = require("./issue.js");
let log = console.log;


function getEachrepolink(url){
        request(url , cb);
        function cb(err , response , html){
                if(err) {
                        console.log("ERROR DETECTED");
                }
                else{
                        repoLinkExtract(html);
                }
        }

        function repoLinkExtract(html){
                let $ = cheerio.load(html);       
                let headingArr = $(".f3.color-fg-muted.text-normal.lh-condensed");
                let topicName = $(".h1").text().trim();
                log(topicName);
                for(let i = 0 ; i < 8 ; i++){
                        let repolink ="https://github.com"+ $(($(headingArr[i]).find("a"))[1]).attr("href") + "/issues";
                        let tempArray= repolink.split("/");
                        let repoName = tempArray[tempArray.length - 2].trim();
                        // log(repoName,"\t\t",repolink);
                        issue(repolink , topicName ,repoName);
                }
                log("----------------------------------------------------------------------------------------------------")
                log("----------------------------------------------------------------------------------------------------")
        }
}

 

module.exports = getEachrepolink;

