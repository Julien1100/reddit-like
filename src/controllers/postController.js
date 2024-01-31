import Post from "../models/postModel";

const createPost = async (req, res) => {
  try {
    const newPost = await new Post();
    newPost.title = req.body.title;
    newPost.content = req.body.content;
    newPost.author = req.body.author;
    newPost.subreddit = req.body.subreddit;
    await newPost.save();
    res.status(201).send(`Le post est créé 🆕\n${newPost}`);
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

export { createPost, getAllPosts };
