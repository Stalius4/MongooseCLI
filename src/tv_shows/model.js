const mongoose =require("mongoose")

const tvSchema = new mongoose.Schema({
    title:{
        type: String,
        unique: true,
        required: true,
    },
    actor:{
        type:String,
        default: "Not specified",
    },
    year:{
        type:Number,
        default: "Not specified",
    },
    genre:{
        type:String,
        default: "Not specified",
    },
    rating:{
        type:String,
        default: "Not specified",
    }
});

const Tv = mongoose.model("Tv", tvSchema)


module.exports =Tv;