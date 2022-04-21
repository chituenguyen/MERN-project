const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PostSchema = new Schema({
    title : {
        type : String,
        required: true,
    },
    description : {
        type : String,
    },
    url:{
        type:String,
    },
    status:{
        type: String,
        enum:['TO LEARN','LEARNED','LEARNING']
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:'user'
    }
})

module.exports = mongoose.model('post',PostSchema)