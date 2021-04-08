var fs=require('fs');

var myReadStream=fs.createReadStream(__dirname+'/readme.txt','utf8');
var myWriteStream=fs.createWriteStream(__dirname+'/witeMe.txt'); 
myReadStream.on('data',function(chunk){
    console.log("new Chunk recieved:");
    //console.log(chunk);
    myWriteStream.write(chunk);
})