const url = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-delhi-capitals-56th-match-1254101/full-scorecard"
const request = require("request");
const cheerio = require("cheerio");
 

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
        let highest_wicket_taker_name = "";
        let highest_wicket_taken = -1;
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
                        let bowlers = $(inningsArr[i]).find(".table.bowler tbody tr");
                        // console.log(bowlers.length);
                        
                        for(let j = 0 ; j < bowlers.length ;j++)
                        {
                                let allcols = $(bowlers[j]).find("td");
                                // console.log($(allcols[0]).text() , "    " , $(allcols[4]).text());
                                if($(allcols[4]).text() > highest_wicket_taken)
                                {
                                        highest_wicket_taken = $(allcols[4]).text();
                                        highest_wicket_taker_name = $(allcols[0]).text()
                                }
                        }
                        break;                      
                }
                        
        }
        console.log("Winning Team \t\t" , WinnerTeam);
        console.log("Highest Wicket Taker \t" , highest_wicket_taker_name);
        console.log("Wickets Taken \t\t" , highest_wicket_taken);

}

