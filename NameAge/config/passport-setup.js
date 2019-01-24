var passport = require('passport')
var GoogleStrategy = require('passport-google-oauth20')
var keys=require('./keys')
var authModel = require('../controller/auth/index')

passport.serializeUser(function(user,done){
    done(null,user)
})

passport.deserializeUser(function(user,done){
    done(null,user.Id)
})
passport.use(new GoogleStrategy({
    callbackURL:'/auth/google/redirect',
    clientID:keys.google.clientID,
    clientSecret:keys.google.clientSecret
}
,function(accessToken,refreshToken,profile,done){

    authModel.saveData.saveData(profile,function(result){
        done(null,result)
    })



}))