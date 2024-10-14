const User = require("../models/User");
const bcrypt = require("bcryptjs");

const userController = {

    register: async (req, res) => {
        try {
            const selectedUser = await User.findOne({ email: req.body.email });
            if (selectedUser) {
                return res.status(400).json({ message: "Email already exists" });
            }

            const hashedPassword = bcrypt.hashSync(req.body.password, 10);
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            });

            const savedUser = await user.save();
            res.status(201).json(savedUser);
        } catch (error) {
            res.status(500).json({ message: "Error registering user", error: error.message });
        }
    },
    login: async (req, res) => {
        try {
            const selectedUser = await User.findOne({ email: req.body.email });
            if (!selectedUser) {
                return res.status(400).json({ message: "Email or password incorrect" });
            }

            const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password);
            if (!passwordAndUserMatch) {
                return res.status(400).json({ message: "Email or password incorrect" });
            }

            res.status(200).json({ message: "User logged in successfully" });
        } catch (error) {
            res.status(500).json({ message: "Server error", error: error.message });
        }
    }

}

module.exports = userController;