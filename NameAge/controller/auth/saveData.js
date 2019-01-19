var db = require('../../models/conn')

function saveData(profile,cb){
    db.db2.find({Id:profile.id},function(err,result){
        if(err)
            console.log(err)
        else{
            if(result.length!=0){
                var data = db.db2({Id:profile.id,userName:profile.displayName})
                data.save(function(err,result){
                    if(err)
                        console.log(err)
                    else
                        cb(result)
                })

            }
            else
                cb(result[0])
        }
    
    })
    
}

module.exports = saveData