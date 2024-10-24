const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.header('authorization-token');
    if (!token) return res.status(401).send("Access Denied") 
    if (token) return res.send("token recebido!")
}