var fs = require('fs')
var express = require('express');
var usermodels = require('../controller/users/usermodels')
var joi = require('joi')
var router = express.Router();
var randomstring = require('randomstring')
var authModel = require('../controller/auth/index')

router.use(function(req,res,next){
  
  if(authModel.saveData.exportData() != undefined)
  {
    console.log(authModel.saveData.exportData())
    req.session.usernames = authModel.saveData.exportData()
  }  
  next()
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});

router.get('/showInfo', function(req, res, next) {
  usermodels.showInfo(req,function(result){
    if(result)
      res.render('showInfo',{result:result});
    else
      res.redirect('/')  
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
      {
        var random=randomstring.generate()
        img.name=random+img.name
        img.mv('./uploads/'+img.name)
      }
      usermodels.addInfo(req,Name,Age,img,function(result){
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
    
    if(result.n){
        
        res.send(Name)
    }
    
    else
      res.send('Name Not Found')
})
})

router.get('/updateInfo',function(req,res){
  res.render('updateInfo',{message:''})
})

router.put('/updateInfo/:prevname/:newname',function(req,res){
  var prevname = req.params.prevname
  var newname = req.params.newname
  usermodels.updateInfo(prevname,newname,function(result){
    console.log(result)
    if(result)
      res.send(prevname)
    else
      res.send('Name Not Found')
  })

})

router.get('/signup',function(req,res){
  res.render('signup')
})

router.post('/signup',function(req,res){
  var username = req.body.username
  var pass = req.body.pass
  usermodels.saveData(username,pass,function(result){
    if(result)
      res.redirect('/login')
    else
      res.redirect('/signup')
  })
})

router.get('/login',function(req,res){
  res.render('login')
})

router.post('/login',function(req,res){
  var username = req.body.username
  var password = req.body.pass
  usermodels.validateData(username,password,function(result){
    if(result){
      req.session.username = username
      res.redirect('/showInfo')
    }
    else
      res.redirect('/login')
  })
})
module.exports = router;
