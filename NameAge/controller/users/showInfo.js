var db = require('../../models/conn')

module.exports=function showInfo(req,cb){
  if(req.user!=null || req.session.username!=undefined)
  {
    if(req.session.username!=undefined)
    {
      db.db1.find({username:req.session.username},function(err,result){
        if(err)
          console.log(err)
        else
          cb(result)
      })
    }
    else
    {
      db.db1.find({username:req.session.usernames},function(err,result){
        if(err)
          console.log(err)
        else
          cb(result)
      })

    }
  }
  else
    cb(false)
    
  }