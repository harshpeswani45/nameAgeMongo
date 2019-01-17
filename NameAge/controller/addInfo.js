var db = require('../models/conn')
var path = require('path')

module.exports=function addInfo(req,name,age,img,cb){
    
    if ((path.extname(img.name).toLowerCase() === ".png")||(path.extname(img.name).toLowerCase() === ".jpg")){
        var data=db({Name:name,Age:age,Image:img.name})
        data.save(function(err,result){
        if(err)
            console.log(err)
        else
            cb(result)
        })
    }
    else
        cb(false)
  }