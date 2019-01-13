var db = require('./conn')

function showInfo(cb){
  db.collection('contactInfo').find().toArray(function(err,result){
    if(err)
      console.log(err)
    else
      cb(result)
  })
}

function addInfo(name,age,img,cb){
  var data={Name:name,Age:age,Image:img.name}
  db.collection('contactInfo').insertOne(data,function(err,result){
    if(err)
      console.log(err)
    else
      cb(result)
  })
}

function deleteInfo(name,cb){
  db.collection('contactInfo').deleteOne({Name:name},function(err,result){
    if(err)
      console.log(err)
    else
      cb(true)
  })
}

function updateInfo(prevname,newname,cb){
  db.collection('contactInfo').update({Name:prevname},{$set:{Name:newname}},function(err,result){
    if(err)
      console.log(err)
    else
      cb(true)
  })

}
module.exports={showInfo:showInfo,addInfo:addInfo,deleteInfo:deleteInfo,updateInfo:updateInfo}