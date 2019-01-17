var db = require('../models/conn')

module.exports=function updateInfo(prevname,newname,cb){
    db.update({Name:prevname},{$set:{Name:newname}},function(err,result){
      if(err)
        console.log(err)
      else
        cb(true)
    })
  
  }
