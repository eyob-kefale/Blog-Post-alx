const router = require("express").Router();
const Post = require("../models/Post")
const User = require("../models/User")


//create post

router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)

    } catch (err) {
        res.status(500).json(err)

    }

});



//update post
router.put("/:id", async (req, res) => {

    try {
        const post = await Post.findById(req.params.id);
        if (post.userName === req.body.userName) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                },
                    { new: true }
                );
           
                res.status(200).json(updatedPost)
            }
            catch (err) {

            }
        } else {
            alert("You can update only your post");
            res.status(500).json("You can update only your post")

        }

    } catch (err) {
        res.status(500).json(err);
    }

}
);



//Delete post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userName === req.body.userName) {
            try {
                await post.delete();
                res.status(200).json("post has been deleted...");
            } catch (err) {
                res.status(500).json(err);
            }

        } else {
            res.status(401).json("You can delete only your post")
        }

    } catch (err) {
        res.status(500).json(err);
    }
}
);

//GET POST
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json("not found");
    }
})


//GET ALL POSTS
router.get("/",async(req,res)=>{
    const userName=req.query.user;
    const catName=req.query.cat;
try {
    let posts;
    if(userName){
        posts=await Post.find({userName})
    }else if(catName){
        posts=await Post.find({catagories:{
            $in:[catName]
        }})

    }else{
      posts=await Post.find()  
    }
    res.status(200).json(posts);
} catch (error) {
    res.status(500).json(err);
}
   
})

module.exports = router