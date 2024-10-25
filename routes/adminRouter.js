const express = require("express");
const router = express.Router();
const auth = require("../controllers/authController")

router.get("/", auth, (req, res) => {

    if (req.user.admin) {

        res.send("Somente pessoal autorizado, ou Tom Elis")
    } else {
        res.status(401).send("Not admin, neither Tom Elis: Access Denied!")
    }
    
})

router.get("/free", auth, (req, res) => {
    res.send("Access it's free!")
})


module.exports = router;