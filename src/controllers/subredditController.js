import Subreddit from "../models/subredditModel";
import Post from "../models/postModel";

const createSubreddit = async (req, res) => {
  try {
    const newSubreddit = await new Subreddit();
    newSubreddit.title = req.body.title;
    newSubreddit.description = req.body.description;
    newSubreddit.creator = req.user._id;

    await newSubreddit.save();

    res
      .status(201)
      .send(`Le subreddit \"${newSubreddit.title}\" a été créé 🆕`);
  } catch (error) {
    res.status(500).send("Erreur lors de la création du subreddit");
  }
};

const getAllSubreddits = async (req, res) => {
  try {
    const allSubreddits = await Subreddit.find();
    res.send(allSubreddits);
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur lors de la requête");
  }
};

const getOneSubreddit = async (req, res) => {
  const subredditId = req.params.subredditId;

  try {
    const subreddit = await Subreddit.findById(subredditId);

    if (subreddit) {
      const postsId = subreddit.posts;

      const posts = await Post.find({ _id: { $in: postsId } }, "title content");

      res.send(
        `${subreddit.title} | ${
          subreddit.description
        }\nPosts dans ce subreddit:\n${posts
          .map((post) => `${post.title} - ${post.content}`)
          .join("\n")}`
      );
    } else {
      res.status(404).send("Subreddit introuvable");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur lors de la requête");
  }
};

export { createSubreddit, getAllSubreddits, getOneSubreddit };
