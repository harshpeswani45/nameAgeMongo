var mongoose=require('mongoose')

const userSchema = mongoose.Schema({
    username : {type : String,required:true}, 
    Name: {type : String,required:true},
    Age: {type : Number,required: true},
    Image: {type: String, required:true}
  });

const loginUsersGoogle = mongoose.Schema({
    Id:{type: String,required:true},
    userName:{type: String,required:true}
})

const users= mongoose.Schema({
    username : {type:String,required:true},
    password : {type:String,required:true}
})

mongoose.connect('mongodb://localhost/Information',function(err){
    if(err)
        console.log(err)
    else
        console.log('connection successful')
});

var db1 = mongoose.model('contactInfo',userSchema)
var db2 = mongoose.model('loginGoogle',loginUsersGoogle)
var db3 = mongoose.model('users',users)

module.exports={db1:db1,db2:db2,db3:db3}