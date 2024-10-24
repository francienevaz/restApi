const express = require("express");
const router = express.Router();
const auth = require("../controllers/authController")

router.get("/", auth, (req, res) => {
    
    res.send("Somente pessoal autorizado, ou Tom Elis")

})


module.exports = router;