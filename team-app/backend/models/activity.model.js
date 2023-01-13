const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activitySchema = new Schema({
    actName:{
        type:String,
        required:true,
    },
    actDescription:{
        type:String,
        required:true,
    },
    virtualMoney:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
},{
    timestamps:true,
});

const Activity = mongoose.model('Activity',activitySchema);

module.exports = Activity;