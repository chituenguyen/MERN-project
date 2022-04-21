const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username : {
        type : String,
        required: true,
        unique: true
    },
    password : {
        type : String,
        required: true,
    },
    createdAt:{
        type:String,
        default: Date.now
    }
})

module.exports = mongoose.model('user',UserSchema)