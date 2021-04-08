var  fetch=require('node-fetch');
var fs=require('fs');
function statusCheck(res){
    if(res.ok){
        return res;
    }
}
fetch('http://localhost:3000/books')
.then(statusCheck)
.then(res=>res.json())
.then(json=>{
    var data=JSON.stringify(json);
    fs.writeFile('jeni.json',data,function(){
               console.log("successfuly downloaded from localhost 3000 and added to a file!!!");
        });
})
.catch(error=>console.log(error));
