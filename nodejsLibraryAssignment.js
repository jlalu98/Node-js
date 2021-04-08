var fetch=require('node-fetch');
function statusCheck(res){
    if(res.ok){
        return res;
    }
    // else if(err){
    //     console.log(err.res);
    // }
}
fetch("http://localhost:3000/books")
.then(statusCheck)
.then(res=>res.json())
.then(json=>console.log(json))
.catch(err=>console.error(err));