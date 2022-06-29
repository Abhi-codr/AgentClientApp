const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name:{type:String,required:[true,"Client name is required"]},
    email:{type:String,required:[true,"Client Email is required"]},
    phoneNumber:{type:String,required:[true,"Client phone number is required"]},
    totalBill:{type:String,required:[true,"Client total bill is required"]},
    agencyId:{type:Schema.Types.ObjectId,required:true},
})

const Client = mongoose.model("Client",clientSchema);

module.exports = Client