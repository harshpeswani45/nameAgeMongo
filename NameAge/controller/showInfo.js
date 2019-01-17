var db = require('../models/conn')

module.exports=function showInfo(cb){
    db.find({},function(err,result){
      if(err)
        console.log(err)
      else
        cb(result)
    })
  }