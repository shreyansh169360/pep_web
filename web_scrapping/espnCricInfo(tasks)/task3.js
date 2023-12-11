//print birthday (birth date ) of the Winning team batsmen.
//dependency -> task2
const url = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-delhi-capitals-56th-match-1254101/full-scorecard"
const request = require("request");
const cheerio = require("cheerio");
const log = console.log;

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
        let WinnerTeam="";
        let $ = cheerio.load(html);
        let data= $(".match-info.match-info-MATCH.match-info-MATCH-half-width .team");
        // console.log(data.length);
        for(let i = 0 ; i < data.length;i++)
        {
                if(!($(data[i]).hasClass("team-gray")))
                {
                       WinnerTeam = $(data[i]).find(".name").text();
                }
        }
        WinnerTeam =  WinnerTeam.trim();
        // console.log("Winning Team is ->" , WinnerTeam);

        //The original HTML is too large to be handled , so we narrow down (make a new html) whivh will have the required html (bolowing/batting stats of both teams)
        let inningsArr = $(".card.content-block.match-scorecard-table > .Collapsible"); //2 teams , their scorecard are collapsible , help to distinguissh
        let htmlstr = "";//new HTMl 
        for(let i = 0 ;  i < inningsArr.length ; i++)
        {
                let chtml = $(inningsArr[i]).html();
                htmlstr += chtml;
                let teamNameElement = $(inningsArr[i]).find(".header-title.label");
                let teamName = teamNameElement.text();
                // console.log(teamName);  //We see the Name of teams are followed by "ININGS ...." , so we split the teamName based on "INNINGS" word and take the first part
                teamName = teamName.split("INNINGS")[0].trim();
                if(teamName == WinnerTeam)
                {
                  let batsmenTable = $(inningsArr[i]).find(".table.batsman tbody tr") //array of the batsman and related attributes
                  for(let j = 0 ; j < batsmenTable.length ; j++)
                  {
                       let allCols = $(batsmenTable[j]).find("td");
                       let isBatsman = $(allCols[0]).hasClass("batsman-cell");
                       if(isBatsman == true)
                       {
                                let BatsmanName = ($(allCols[0]).text());
                                let ExtractedlinkToBatsman = $(allCols[0]).find("a").attr("href");
                                let fullLink = "https://www.espncricinfo.com"+ExtractedlinkToBatsman;
                                log(BatsmanName , "\t" ,ExtractedlinkToBatsman , "\t" , fullLink);
                                getBirthdayPage(fullLink);
                       }
                  }
                }
        }
}

function getBirthdayPage(url , playerName , teamName)
{
        request(url , cb);
        function cb(err , response , html){
                if(err){
                        log("ERROR");
                }
                else{
                        extractBD(html , playerName , teamName);        
                }
        }
}

function extractBD(html , Pname , Tname){
        let $ = cheerio.load(html);
        let data = $(".player-card-description");
        log(data.length);
        let DOB = $(data[1]).text();
        log(DOB);
}