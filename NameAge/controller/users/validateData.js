var db = require('../../models/conn')

module.exports = function validateData(username,password,cb){
    db.db3.find({username:username,password:password},function(err,result){
        if(err)
            console.log(err)
        else{
            if(result.length!=0) cb(true)
            else cb(false)
        }
            
    })
}