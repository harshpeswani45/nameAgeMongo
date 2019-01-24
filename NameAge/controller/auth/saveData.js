var db = require('../../models/conn')

var exportsData
function exportData()
{
    
    return exportsData

}
function saveData(profile,cb){
    db.db2.find({Id:profile.id},function(err,result){
        if(err)

            console.log(err)
        else{
            
            exportsData=profile.displayName
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

module.exports = {saveData:saveData,exportData:exportData,exportsData:exportsData}