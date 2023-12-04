var express = require("express");
const { db } = require("../models/Buyers");
var router = express.Router();

// Load User model
const Buyer = require("../models/Buyers");

// GET request 
// Getting all the users
router.get("/registerbuyer", function(req, res) {
    Buyer.find(function(err, buyers) {
		if (err) {
			console.log(err);
		} else {
			res.json(buyers);
		}
	})
});

// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request 
// Add a user to db



router.post("/registerbuyer", (req, res) => {
    const newBuyer = new Buyer({
        
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        contact: req.body.contact,
        age: req.body.age,
        batch: req.body.batch
    });

    newBuyer.save()
        .then(buyer => {
            res.status(200).json(buyer);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});


router.post("/updatebuyer", (req, res) => {
    
    /*const newBuyer=new Buyer({
        
        email: req.body.email
       
    });;*/
    
    Buyer.update({"email" : req.body.email},{$set:{"name" : req.body.name,"password" : req.body.password,"contact" : req.body.contact,"age" : req.body.age,"batch" : req.body.batch}})
        .then(buyer => {
            res.status(200).json(buyer);
        })
        .catch(err => {
            //res.status(400).send(err);
        });
    
    
    

        
        
});


router.post("/loginbuyer", (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	// Find user by email
	Buyer.findOne({ email, password }).then(buyer => {
		// Check if user email exists
		if (!buyer) {
			return res.status(404).json({
				error: "Email not found",
			});
        }
        else{
            res.send("Email Found");
            return buyer;
        }
	});
});

router.post("/getbuyername", (req, res) => {
    
    

    const email = req.body.email;

    Buyer.findOne({ email }).then(buyer => {
		// Check if user email exists
		if (!buyer) {
			return res.status(404).json({
				error: "Email not found",
			});
        }
        else{
            res.send(buyer.name);
            return buyer;
        }
	});


    
});

router.post("/getbuyerpassword", (req, res) => {
    
    

    const email = req.body.email;

    Buyer.findOne({ email }).then(buyer => {
		// Check if user email exists
		if (!buyer) {
			return res.status(404).json({
				error: "Email not found",
			});
        }
        else{
            res.send(buyer.password);
            return buyer;
        }
	});


    
});

router.post("/getbuyercontact", (req, res) => {
    
    

    const email = req.body.email;

    Buyer.findOne({ email }).then(buyer => {
		// Check if user email exists
		if (!buyer) {
			return res.status(404).json({
				error: "Email not found",
			});
        }
        else{
            res.send(buyer.contact);
            return buyer;
        }
	});


    
});

router.post("/getbuyerage", (req, res) => {
    
    

    const email = req.body.email;

    Buyer.findOne({ email }).then(buyer => {
		// Check if user email exists
		if (!buyer) {
			return res.status(404).json({
				error: "Email not found",
			});
        }
        else{
            res.send(buyer.age);
            return buyer;
        }
	});


    
});

router.post("/getbuyerbatch", (req, res) => {
    
    

    const email = req.body.email;

    Buyer.findOne({ email }).then(buyer => {
		// Check if user email exists
		if (!buyer) {
			return res.status(404).json({
				error: "Email not found",
			});
        }
        else{
            res.send(buyer.batch);
            return buyer;
        }
	});


    
});




module.exports = router;
