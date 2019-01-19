var express = require('express');
var passport = require('passport')
var router = express.Router();

/* GET users listing. */
router.get('/google',passport.authenticate('google',{
  scope:['profile']
}));

router.get('/google/redirect',passport.authenticate('google'),function(req,res){
  res.redirect('/showInfo')
})

router.get('/login',function(req,res){
  res.end()
})

router.get('/logout',function(req,res){
  req.session.username=undefined
  req.logout()
  res.redirect('/')
})
module.exports = router;
