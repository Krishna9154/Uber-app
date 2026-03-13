const express = require("express");
const router = express.Router(); 
const{body} = require("express-validator"); // Importing the body function from express-validator to validate incoming request data router.post("/register",[],userController.registerUser); isme jo data he use validate karega aur agar validation fail hota he to error message bhejega. For example, body('email').isEmail().withMessage("Please enter a valid email address") ye validate karega ki email field me valid email address hai ya nahi. Agar nahi hai to "Please enter a valid email address" message bhejega. Similarly, body('fullname').isLength({min:3}).withMessage("Full name must be at least 3 characters long") ye validate karega ki fullname field me kam se kam 3 characters hai ya nahi. Agar nahi hai to "Full name must be at least 3 characters long" message bhejega. Aur body('password').isLength({min:6}).withMessage("Password must be at least 6 characters long") ye validate karega ki password field me kam se kam 6 characters hai ya nahi. Agar nahi hai to "Password must be at least 6 characters long" message bhejega.
const userController = require("../controllers/user.controller");

router.post("/register",[
    body('email').isEmail().withMessage("Please enter a valid email address"),
    body('fullname').isLength({min:3}).withMessage("Full name must be at least 3 characters long"),
    body('password').isLength({min:6}).withMessage("Password must be at least 6 characters long")
],userController.registerUser);

router.post("/login",[
    body('email').isEmail().withMessage("Please enter a valid email address"),
    body('password').isLength({min:6}).withMessage("Password must be at least 6 characters long")
],userController.loginUser);





module.exports = router;