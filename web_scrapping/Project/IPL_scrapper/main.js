let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
const fs = require("fs");                       
const path = require("path");                       
const cheerio = require("cheerio");
const request = require("request");
const allmatchobj = require("./allScorecards");
const iplPath = path.join(__dirname , "ipl");
const log = console.log;



dircreate(iplPath);
request(url , cb);
function cb(err , response , html){
        if(err)
        {
                log("ERROR");
        }
        else{
                extractLink_homePage(html);
        }
}

function extractLink_homePage(html)
{
        let $ = cheerio.load(html);
       let linkElement = $(".widget-items.cta-link");
       let link=  $(linkElement).find("a").attr("href");
//        log(link);

       //OR 

//        let anchorElement =  $("a[data-hover = 'View All Results']"); //aisa  anchor tag jisme data-hover class ho with name "view all results"
//        let link2 = $(anchorElement).attr("href");
//        log(link2);

        let fullLink = "https://www.espncricinfo.com/" + link;
        // log(fullLink);
        allmatchobj.scorecardLinks(fullLink);
}

function dircreate(filePath){   //gENERIC FUNCTION TO CREATE A DIRECTORY 
        if(fs.existsSync(filePath) == false)
                fs.mkdirSync(filePath);
}
