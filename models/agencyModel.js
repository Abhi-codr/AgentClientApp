const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const agencySchema = new Schema({
    name:{type:String,required:[true,"Agency name is required"]},
    address1:{type:String,required:[true,"Agency address is required"]},
    address2:{type:String},
    state:{type:String,required:[true,"Agency state is required"]},
    city:{type:String,required:[true,"Agency city is required"]},
    phoneNumber:{type:String,required:[true,"Agency phone number is required"]},
})

const Agency = mongoose.model("Agency",agencySchema)

module.exports = Agency