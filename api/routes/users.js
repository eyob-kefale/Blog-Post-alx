const router = require("express").Router();
const Post = require("../models/Post")
const User = require("../models/User")

const bcrypt = require('bcrypt');

//update
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {

            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }

    } else {
        res.status(401).json("You can update only your acount")
    }
}
);



//Delete
router.delete("/:id", async (req, res) => {
    if (req.body.id === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            console.log(user)
            try {
                await Post.deleteMany({ userName: user.userName })
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("user has been deleted...");
            } catch (err) {
                res.status(500).json(err);
            }
        } catch (err) {
            res.status(500).json("User not found!");

        }

    } else {
        res.status(401).json("You can delete only your acount")
    }
}
);

module.exports = router