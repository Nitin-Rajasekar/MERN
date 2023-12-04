const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VendorSchema = new Schema({
	
	manag_name: {
		type: String,
		required: true
	},
	shop_name: {
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
	open:{
		type: String,
		required: false
	},
	close:{
		type: String,
		required: false
	}
});

module.exports = Vendor = mongoose.model("Vendors", VendorSchema);
