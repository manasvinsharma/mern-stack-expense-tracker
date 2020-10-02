const Transaction = require('../models/Transaction');

// @desc Get all transactions
// @route GET /api/v1/transactions
// @access public 
exports.getTransactions = async (req,res,next)=>{
    // res.send('GET Transactions');
    try{
        const transactions = await Transaction.find();

        return res.status(200).json({
            success:true,
            count:transactions.length,
            data:transactions
        });
    }
    catch(err){
        return res.status(500).json({
            success:false,
            error:'Server error'
        });
    }
}

// @desc Add transactions
// @route POST /api/v1/transactions
// @access public 
exports.addTransactions = async (req,res,next)=>{
    // res.send('POST Transactions');
    try {
        const {text,amount} = req.body;

        const transaction = await Transaction.create(req.body);
    
        return res.status(201).json({
            success:true,
            data:transaction
        });
    } catch (err) {
        return res.status(500).json({
            success:false,
            error:'Server error'
        });    
    }
}

// @desc Delete all transactions
// @route DELETE /api/v1/transactions
// @access public 
exports.deleteTransactions = async (req,res,next)=>{
    // res.send('DELETE Transactions');
    try {
        const transaction = await Transaction.findById(req.params.id);

        if(!transaction)
        {
            return res.status(404).json({
                success:false,
                error:'No transaction found'
            });
        }

        await transaction.remove();
        return res.status(200).json({
            success:true,
            data:{}
        });
    } catch (err) {
        return res.status(500).json({
            success:false,
            error:'Server error'
        });  
    }
}