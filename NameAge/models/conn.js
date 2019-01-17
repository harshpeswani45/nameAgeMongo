var mongoose=require('mongoose')

const userSchema = mongoose.Schema({
    
    Name: {type : String,required:true},
    Age: {type : Number,required: true},
    Image: {type: String, required:true}
  });


mongoose.connect('mongodb://localhost/Information',function(err){
    if(err)
        console.log(err)
    else
        console.log('connection successful')
});

var db = mongoose.model('contactInfo',userSchema)


module.exports=db