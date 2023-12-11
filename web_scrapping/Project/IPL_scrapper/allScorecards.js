const cheerio = require("cheerio");
const request = require("request");
const scorecardOBJ  = require("./getDetails");
const log = console.log;

function  extractLink_nextPage(url)
{
        request(url , cb);
        function cb(err , response , html){
                if(err){
                        error("ERROR");
                }
                else{
                        getScrorecardLinks(html)
                }
        }
}

function getScrorecardLinks(html)
{
        let $ = cheerio.load(html);
        let scorecardElements = $("a[data-hover = 'Scorecard']");
        let ScorecardLinks=[];
        // log(scorecardElements.length);
        for(let i = 0 ; i < scorecardElements.length; i++)
        {
                let link ="https://www.espncricinfo.com"+ $(scorecardElements[i]).attr("href");
               ScorecardLinks.push(link);
        }
        log(ScorecardLinks);
        for(let x  = 0 ; x < ScorecardLinks.length ; x++){
                scorecardOBJ.pad(ScorecardLinks[x]);
        }
}

module.exports = {
        scorecardLinks : extractLink_nextPage
}