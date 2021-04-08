var request=require('request');
 const { error } = require('console');
request('https://www.google.com/html',function(err,response,body){
   // console.log(body);
   fs.writeFile('index.html',body,function(){
       console.log("successfuly downloaded html page and added to a file!!!");
   });
});