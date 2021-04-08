var fs=require('fs');
fs.mkdir('myDir',function(){
    console.log('Directory created');
    setTimeout(function(){
        fs.rmdir('myDir',()=>{
            console.log('Directory Delted');
        });
    },10000);
})
