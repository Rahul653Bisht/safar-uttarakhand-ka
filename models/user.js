const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//first we did npm i passport
//second npm i passport-local
//third npm i passport-local-mongoose
const passportLocalMongoose = require("passport-local-mongoose");
//passpost-local-mongoose automatically defines the name and password inside our userSchema
const userSchema = new Schema({
    email:{
        type:String,
        required:true
    }
});
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User',userSchema);
