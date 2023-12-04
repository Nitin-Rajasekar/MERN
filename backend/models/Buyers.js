const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BuyerSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	contact:{
		type: String,
		required: false
	},
	age:{
		type: String,
		required: false
	},
	batch:{
		type: String,
		required: false
	}
});

module.exports = Buyer = mongoose.model("Buyers", BuyerSchema);
