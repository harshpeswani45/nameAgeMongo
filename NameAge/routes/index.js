var express = require('express');
var usermodels = require('../models/usermodels')
var joi = require('joi')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  usermodels.showInfo(function(result){
    res.render('index',{result:result});  
  })
});

router.get('/addInfo',function(req,res){
  res.render('addInfo',{message:''})
})

router.post('/addInfo',function(req,res){
  var Name = req.body.Name
  var Age = req.body.Age
  var img = req.files.img
  var schema = joi.object().keys({
    Name : joi.string().required(),
    Age : joi.number().required()
  })
  joi.validate(req.body,schema,function(err,result){
    if(err)
      res.render('addInfo',{message:'Error'})
    else{
      if(img==undefined)
      {
        img={}
        img.name='dummy.png'
      }
      else
        img.mv('./public/images/'+img.name)
      usermodels.addInfo(Name,Age,img,function(result){
        if(result)
          res.render('addInfo',{message:"Succesful"})
        else
          console.log('error in add info')
      })
    }

  })
})

router.get('/deleteInfo',function(req,res){
  var message = req.query.message
  if(message==undefined)
      message=""
  res.render('deleteInfo',{message:message})
})
router.delete('/deleteInfo/:id',function(req,res){
  var Name = req.params.id
  usermodels.deleteInfo(Name,function(result){
    if(result)
    res.render('deleteInfo',{message:'Succesful'})
    else
      res.render('deleteInfo',{message:'Name Not Found'})
})
})

router.get('/updateInfo',function(req,res){
  res.render('updateInfo',{message:''})
})

router.put('/updateInfo/:prevname/:newname',function(req,res){
  var prevname = req.params.prevname
  var newname = req.params.newname
  usermodels.updateInfo(prevname,newname,function(result){
    if(result)
      res.render('updateInfo',{message:'Succesful'})
    else
      res.render('updateInfo',{message:"Error"})
  })

})

module.exports = router;
