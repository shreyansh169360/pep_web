// let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard";
const cheerio = require("cheerio");
const path = require("path");
const xlsx = require("xlsx");
const request = require("request");
const fs = require("fs");
const log = console.log;

/*toDo : create foldcer "IPL"
                create "<TeamName>" folder
                        create an xl file of each batsman of that team
                                in that XL file  , you have the column of venue of match , date , Opponent , Result , Runs , 4s , 6s , Strike Rate
*/
function processAllDetails(url){
        request(url , cb);
}


function cb(err , response , html){
        if(err)
        {
                log("ERROR");
        }
        else{
                extractLink(html);
        }
}

function extractLink(html){
        let $ = cheerio.load(html);
        //Note that For 1 match , venue , dateOfMatch , Result will be same for the both the Teams. , so we'll extract these things Separately
        let unifiedDataElement = $(".header-info .description");
        let unifiedDataText = ($(unifiedDataElement).text());
        let Venue = (unifiedDataText.split(","))[1].trim();
        let date = (unifiedDataText.split(","))[2].trim();
        let result = $(".event .status-text").text().trim();
        // log(result);
        // log(Venue);
        // log(date);
        let teamElement = $(".match-scorecard-page .Collapsible");
        // log(teamElement.length);

        //Now to find out the specific data
        for(let i = 0 ; i < teamElement.length ;i++){
                let currentTeamName = ($(teamElement[i]).find("h5").text().split("INNINGS"))[0].trim();
                let opponentTeamIndex = i == 0 ? 1:0;
                let opponentTeamName =  ($(teamElement[opponentTeamIndex]).find("h5").text().split("INNINGS"))[0].trim();
                log("\t" ,currentTeamName , " VS  " , opponentTeamName);
                let batsmanTableElement = $(teamElement[i]).find(".table.batsman tbody tr");      //We'll get the table element having the bastsman data
                // log(batsmanTableElement.length);
                for(let j = 0 ; j < batsmanTableElement.length ;j++)
                {
                       
                        let TD =  $(batsmanTableElement[j]).find("td");
                        if($(TD[0]).hasClass("batsman-cell") == true)
                        {
                                let columns = $(batsmanTableElement[j]).find("td");
                                let playerName = $(columns[0]).text().trim();
                                let runs = $(columns[2]).text().trim();
                                let balls= $(columns[3]).text().trim();
                                let fours= $(columns[5]).text().trim();
                                let sixes= $(columns[6]).text().trim();
                                let strikeRate= $(columns[7]).text().trim();
                                 log(playerName , " - " , runs , " -- " , balls, " -- " , fours, " -- " , sixes, " -- " , strikeRate);
                                processThePlayer(currentTeamName ,  playerName , runs , balls , fours , sixes , strikeRate ,opponentTeamName, date , Venue , result); //fOLDER CREATOR
                        }
                }
              //  log("----------------------------------------------------------------------------------------------")
                


        }
}

function processThePlayer(currentTeamName ,  playerName , runs , balls , fours , sixes , strikeRate ,opponentTeamName, date , Venue , result){
        let teamPath = path.join(__dirname , "ipl" , currentTeamName);
        dircreate(teamPath); //creates a folder if not present
        let filepath = path.join(teamPath , playerName + ".xlsx");
        // dircreate(filepath);
        //Supoose that the filepath(excel file of a player already exist with some data)
        let prevContent = xlsx_to_json(filepath , playerName);  //retrieve previous content in form of object array
        let newObj = {                  //New data
                currentTeamName,
                opponentTeamName,
                date,
                Venue,
                result,
                playerName , 
                runs,
                balls,
                fours,
                sixes,
                strikeRate,
        };
        prevContent.push(newObj);
        json_to_xlsx(filepath , prevContent , playerName);

}

function dircreate(filePath){
        if(fs.existsSync(filePath) == false)
                fs.mkdirSync(filePath);
}

function json_to_xlsx(filepath , json , sheetName) // data ->  json parsed buffer (write to xlsx in storage)
{
        let newWB = xlsx.utils.book_new();
        let newWS = xlsx.utils.json_to_sheet(json);
        xlsx.utils.book_append_sheet(newWB , newWS , sheetName) ; //1st parameter - destination workbook ; 2nd parameter - source worksheet ; 3rd para - name of worksheet
        xlsx.writeFile(newWB , filepath);
}


function xlsx_to_json(filepath , sheetName) //retrieves xlsx from storage
{
        if(fs.existsSync(filepath) == false)
        {
                return []; //return empty JSON object
        }

        let wb = xlsx.readFile(filepath);
        let xlData = wb.Sheets[sheetName];
        let ans = xlsx.utils.sheet_to_json(xlData);
        return ans; //returns JSON object       
}
module.exports = {
 pad : processAllDetails  
}