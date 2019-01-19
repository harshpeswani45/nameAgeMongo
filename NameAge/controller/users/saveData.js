var db = require('../../models/conn')

module.exports = function saveData(username,password,cb){
    db.db3.find({username:username},function(err,result){
        if(err)
            console.log(err)
        else{
            console.log(result)
            if(result.length==0){
                var data = db.db3({username:username,password:password})
                data.save(function(err,result){
                    if(err)
                        console.log(err)
                    else
                        cb(true)
                })
            }
            else{
                cb(false)
            }
        }
    })
}