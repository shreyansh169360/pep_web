let fs = require("fs");
let xlsx = require("xlsx");
let buffer = fs.readFileSync("./example.json");
// console.log(buffer);
console.log("-----------------------------------------");
let data = JSON.parse(buffer); 
console.log(data);
//Since data is an array , we can push more values
 data.push(
        {
                "name" : "Rajat",
                "last name":"Paul",
                "isStudent" : true,
                "friends" : null,
                "age" : 20,
                 "address" :    {
                                        "city" : "Lucknow",
                                        "Country" : "India"
                                }
        
        }

);
//Now since the data is updated , we need to update the file too
//since the data is in array format , and writefilesync , works with strings, we need to convert this data to string , for this we have
let stringdata = JSON.stringify(data);
fs.writeFileSync("./example.json" , stringdata);




//---------------------------------------------------------------

//to put data in xl file , we use JSON , 
//JSON's key act as column names , value act as data.
//Steps to convert JSON to XL
/*
1. npm i xlsx
2. create a workbook
3. create a work-sheet giving the data of JSON
4. append the worksheet to workbook
5. write back the workbook as a .xlsx file onto system usinf writefileSync
*/

//step2
let newWB = xlsx.utils.book_new();

//step3
let newWS = xlsx.utils.json_to_sheet(data);

//step4
xlsx.utils.book_append_sheet(newWB , newWS , "sheet - 1") ; //1st parameter - destination workbook ; 2nd parameter - source worksheet ; 3rd para - name of worksheet

//step5
xlsx.writeFile(newWB , "./newExcel.xlsx");

//-----------------------------------------------------------------
// xlsx -> json

//extract workbook
let wb = xlsx.readFile("newExcel.xlsx");
//from wb extract worksheet
let xlData = wb.Sheets["sheet - 1"];
//change format to JSON
let ans = xlsx.utils.sheet_to_json(xlData);
console.log(ans);

//------------------------------------------------------------------------------
//Generic Function to convert JSON -> XLSX & XLSX -> JSON

        
function json_to_xlsx(filepath , json , sheetName) // data ->  json parsed buffer
{
        let newWB = xlsx.utils.book_new();
        let newWS = xlsx.utils.json_to_sheet(json);
        xlsx.utils.book_append_sheet(newWB , newWS , sheetName) ; //1st parameter - destination workbook ; 2nd parameter - source worksheet ; 3rd para - name of worksheet
        xlsx.writeFile(newWB , filepath);
}


function xlsx_to_json(filepath , sheetName)
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