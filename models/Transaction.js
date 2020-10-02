const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text:{
        type:String,
        trim:true, // just to trim some extra spaces at starting or end of string
        required:[true,'Please add some text'] //ye pta nhi message kaha display hoga 
    },
    amount:{
        type:Number,
        required:[true,'Please add a positive or nrgative number'] //ye pta nhi message kaha display hoga
    },
    createAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Transaction',TransactionSchema);