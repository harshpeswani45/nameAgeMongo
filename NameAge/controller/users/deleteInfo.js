var db = require('../../models/conn')
var fs = require('fs')

module.exports = function deleteInfo(name,cb){
    db.db1.find({Name:name},function(err,result){
      if(err)
        console.log(err)
      else{
       
        if(result.length!=0 && result[0].Image!='dummy.png'){
            var path = 'D:/NameAge/public/images/'+result[0].Image
            fs.unlink(path,function(err){
            if(err){
                console.log(err)
            }
            else{
                db.deleteOne({Name:name},function(err,result){
                if(err)
                 console.log(err)
                else
                    cb(result)
            
            })
         }
            })
        }
        else{
            db.deleteOne({Name:name},function(err,result){
                if(err)
                 console.log(err)
                else
                    cb(result)
                })

        }
        
    }
    
    
        
    })
    
  }
  