const express = require("express");
const { check, validationResult } = require("express-validator");

const { chunk } = require("lodash");

const auth = require("../middleware/auth");
const User = require("../models/User");
const Post = require("../models/Post");

const router = express.Router();

// @route       POST api/posts
// @desc        Create new post
// @access      Private
router.post(
  "/",
  [auth, check("text", "Text is required").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");

      const newPost = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });

      const post = await newPost.save();

      res.json(post);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server error");
    }
  }
);

// @route       GET api/posts
// @desc        Get all posts
// @access      Private
router.get("/part/:pageId", auth, async (req, res) => {
  try {
    const posts = await (await Post.find().sort({ date: -1 })).filter(
      (post) => post.isRemoved === false
    );

    const dividedPosts = chunk(posts, 3);

    // Validation of page number
    let pageNumber = req.params.pageId;
    if (req.params.pageId < 0) pageNumber = 0;
    if (req.params.pageId > dividedPosts.length - 1)
      pageNumber = dividedPosts.length - 1;

    res.json({
      selected: dividedPosts[pageNumber],
      length: dividedPosts.length,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
});

// @route       DELETE api/posts/:id
// @desc        Delete post by ID
// @access      Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // check post exists
    if (!post) {
      return res.status(400).json({ msg: "Post not found" });
    }

    // check user
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    post.isRemoved = true;

    await post.save();

    res.json({ msg: "Post removed" });
  } catch (error) {
    onsole.log(error.message);

    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }

    res.status(500).send("Server error");
  }
});

// @route       GET api/posts/:id
// @desc        Get post by ID
// @access      Private
router.get("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    console.log(error.message, "!");

    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }

    res.status(500).send("Server error");
  }
});

// @route       PUT api/posts/addlike/:id
// @desc        Get post by ID
// @access      Private
router.put("/addlike/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // check like by CURRENT user
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id).length >
      0
    ) {
      return res.status(400).json({ msg: "Post already liked!" });
    }

    post.likes.unshift({ user: req.user.id });

    await post.save();

    res.json(post.likes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

// @route       PUT api/posts/addlike/:id
// @desc        Get post by ID
// @access      Private
router.put("/removelike/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // check like by CURRENT user
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: "You haven't liked this post yet" });
    }

    // remove index
    const removeIndex = post.likes.findIndex(
      (like) => like.user.toString() === req.user.id
    );

    post.likes.splice(removeIndex, 1);

    await post.save();

    res.json(post.likes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

// @route       POST api/posts/comment/:id
// @desc        Create comment for post by ID
// @access      Private
router.post(
  "/comment/:id",
  [auth, check("text", "Text is required").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");

      const post = await Post.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        avatar: user.avatar,
        name: user.name,
        user: req.user.id,
      };

      post.comments.unshift(newComment);

      await post.save();

      res.json(post.comments);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route       DELETE api/posts/comment/:id/:commentId
// @desc        Remove comment for post by ID
// @access      Private
router.delete("/comment/:id/:commentId", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // check existing
    const comment = post.comments.find(
      (comment) => comment.id === req.params.commentId
    );

    if (!comment) {
      return res.status(404).json({ msg: "Comment not found" });
    }

    // check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    // remove index
    const removeIndex = post.comments.findIndex(
      (comment) => comment._id.toString() === req.params.commentId
    );

    post.comments.splice(removeIndex, 1);

    await post.save();

    res.json(post.comments);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
