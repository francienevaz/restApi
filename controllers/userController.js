const userController = {

    register: (req, res)=> {
        res.send("Register")
    }, 
    login: (req, res) => {
        res.send("Login")
    }

}

module.exports = userController;