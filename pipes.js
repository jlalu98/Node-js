var fs=require('fs');

var myReadStream=fs.createReadStream(__dirname+'/readme.txt','utf8');
var myWriteStream=fs.createWriteStream(__dirname+'/witeMe.txt'); 
myReadStream.pipe(myWriteStream);