const request = require("request");

console.log("Before the request to Wordometer covid website. ");  
request('https://www.worldometers.info/coronavirus/', cb);
console.log("After the request to Wordometer covid website. ");  

function cb(error , response , html){
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('html :', html); // Print the HTML for the Google homepage.
};