const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Paytm");

const userSchema = mongoose.schema({
    firstName: String,
    lastNmae: String,
    username: String,
    password: String
})

const User = mongoose.model('User',userSchema);

module.exports={
    User
}