var express = require("express");
var router = express.Router();

// Load User model
const Vendor = require("../models/Vendors");

// GET request 
// Getting all the users
router.get("/registervendor", function(req, res) {
    Vendor.find(function(err, vendors) {
		if (err) {
			console.log(err);
		} else {
			res.json(vendors);
		}
	})
});

// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request 
// Add a user to db



router.post("/registervendor", (req, res) => {
    const newVendor = new Vendor({
        
        manag_name: req.body.manag_name,
        shop_name: req.body.shop_name,
        email:req.body.email,
        password:req.body.password,
        contact: req.body.contact,
        open: req.body.open,
        close: req.body.close
    });

    newVendor.save()
        .then(vendor => {
            res.status(200).json(vendor);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/loginvendor", (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	// Find user by email
	Vendor.findOne({ email, password }).then(vendor => {
		// Check if user email exists
		if (!vendor) {
			return res.status(404).json({
				error: "Email not found",
			});
        }
        else{
            res.send("Email Found");
            return vendor;
        }
	});
});

module.exports = router;


router.post("/updatevendor", (req, res) => {
    
    
    
    Vendor.update({"email" : req.body.email},{$set:{"manag_name" : req.body.manag_name,"shop_name" : req.body.shop_name,"password" : req.body.password,"contact" : req.body.contact,"open" : req.body.open,"close" : req.body.close}})
        .then(vendor => {
            res.status(200).json(vendor);
        })
        .catch(err => {
            //res.status(400).send(err);
        });
        
        
});

router.post("/getvendorname", (req, res) => {
    
    

    const email = req.body.email;

    Vendor.findOne({ email }).then(vendor => {
		// Check if user email exists
		if (!vendor) {
			return res.status(404).json({
				error: "Email not found",
			});
        }
        else{
            res.send(vendor.manag_name);
            return vendor;
        }
	});


    
});

router.post("/getvendorshop", (req, res) => {
    
    

    const email = req.body.email;

    Vendor.findOne({ email }).then(vendor => {
		// Check if user email exists
		if (!vendor) {
			return res.status(404).json({
				error: "Email not found",
			});
        }
        else{
            res.send(vendor.shop_name);
            return vendor;
        }
	});


    
});

router.post("/getvendorpassword", (req, res) => {
    
    

    const email = req.body.email;

    Vendor.findOne({ email }).then(vendor => {
		// Check if user email exists
		if (!vendor) {
			return res.status(404).json({
				error: "Email not found",
			});
        }
        else{
            res.send(vendor.password);
            return vendor;
        }
	});


    
});

router.post("/getvendorcontact", (req, res) => {
    
    

    const email = req.body.email;

    Vendor.findOne({ email }).then(vendor => {
		// Check if user email exists
		if (!vendor) {
			return res.status(404).json({
				error: "Email not found",
			});
        }
        else{
            res.send(vendor.contact);
            return vendor;
        }
	});


    
});

router.post("/getvendoropen", (req, res) => {
    
    

    const email = req.body.email;

    Vendor.findOne({ email }).then(vendor => {
		// Check if user email exists
		if (!vendor) {
			return res.status(404).json({
				error: "Email not found",
			});
        }
        else{
            res.send(vendor.open);
            return vendor;
        }
	});


    
});

router.post("/getvendorclose", (req, res) => {
    
    

    const email = req.body.email;

    Vendor.findOne({ email }).then(vendor => {
		// Check if user email exists
		if (!vendor) {
			return res.status(404).json({
				error: "Email not found",
			});
        }
        else{
            res.send(vendor.close);
            return vendor;
        }
	});


    
});