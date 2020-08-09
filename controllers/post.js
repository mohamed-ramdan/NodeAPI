const Post = require("../models/post");

exports.getPosts = (req, res) => {
    //res.json(Posts = [{'title': 'Post 1'}, {'title': 'post 2'}]);
    //res.send("hello world")
    const post = Post.find()
    .select("title body")
    .then((posts)=>{
        res.json({posts});
    })
    .catch((err)=>{
        console.log(err)
    })
    };

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    console.log("Post Created Successfully", req.body);
    // res.json(req.body);
    post.save((err, result)=>{
        if(err){
            console.log("error");
            return res.status(400).json({
                error: err 
            });
        }
        console.log("before 200");
        res.status(200).json({
            post: result
        });
        console.log("after 200");
    });

};