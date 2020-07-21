const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
	text: {
		type: String,
		trim: true,
		required: [true, "Please add some entry"],
	},
	amount: {
		type: Number,
		required: [true, "Please enter a positive or negative amount"],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Transaction", transactionSchema);
