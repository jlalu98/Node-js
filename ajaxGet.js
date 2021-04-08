var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function ajaxGet(uri,callBack){
    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            if(xhr.status==200){
            callBack(false,JSON.parse(xhr.responseText))
            }
            else{
            callBack(new Error("File is not found!!"))
        }
    }
}
xhr.open('get',uri,true);
xhr.send();
}
function statusCheck(err,response){
    if(err){
        console.log(err);
    }
    else{
        response.forEach(book => {
            console.log(book);
        });
    }
}
ajaxGet("http://localhost:3000/books",statusCheck)