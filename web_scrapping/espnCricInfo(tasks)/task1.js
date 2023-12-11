const log = console.log;
const request = require("request");
const cheerio = require("cheerio");
const url = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-delhi-capitals-56th-match-1254101/ball-by-ball-commentary";


request(url , cb);      //it is an async func.
function cb(error , response , html)
{
        if(error){
                log("Error has occured !");
        }
        else{
                extractHTML(html);
        }
}

function extractHTML(html)
{
        let $ = cheerio.load(html);
        let data = $("#main-container > div:nth-child(1) > div > div.container > div.row > div.col-16.col-md-16.col-lg-12.main-content-x > div.match-body > div.comment-container.card > div.mb-5.comments-container-body > div > div:nth-child(1) > div.match-comment > div.d-flex.match-comment-padder.align-items-center > div.col-14.col-md-15.col-lg-14 > div > div > div.match-comment-long-text > p");
        log($(data[0]).text());
}