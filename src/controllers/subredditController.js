import Subreddit from "../models/subredditModel";

const createSubreddit = async (req, res) => {
  try {
    const newSubreddit = await new Subreddit();
    newSubreddit.title = req.body.title;
    newSubreddit.description = req.body.description;
    await newSubreddit.save();
    res
      .status(201)
      .send(`Le subreddit \"${newSubreddit.title}\" a été créé 🆕`);
  } catch (error) {
    console.log(error);
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

export { createSubreddit, getAllSubreddits };
