import Post from "../models/postModel";
import Subreddit from "../models/subredditModel";

const createPost = async (req, res) => {
  try {
    const newPost = await new Post();
    newPost.title = req.body.title;
    newPost.content = req.body.content;
    newPost.author = req.body.author;
    await newPost.save();
    res.status(201).send(`Le post est créé 🆕\n${newPost}`);
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur lors de a création du post");
  }
};

const createPostInSubreddit = async (req, res) => {
  try {
    const subredditId = req.params.subredditId;

    const newPost = await new Post();
    newPost.title = req.body.title;
    newPost.content = req.body.content;
    newPost.author = req.body.author;
    newPost.subreddit = subredditId;
    await newPost.save();

    //Add newPost._id to related subreddit collection
    const subreddit = await Subreddit.findByIdAndUpdate(
      subredditId,
      { $push: { posts: newPost._id } },
      { new: true }
    );

    res
      .status(201)
      .send(
        `Le post est créé dans le subreddit \"${subreddit.title}\" 🆕\n${newPost}`
      );
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur lors de a création du post");
  }
};

const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.status(200).send(allPosts);
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur serveur");
  }
};

export { createPost, createPostInSubreddit, getAllPosts };
