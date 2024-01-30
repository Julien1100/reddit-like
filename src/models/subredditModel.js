import mongoose, { Schema, model } from "mongoose";

const subredditSchema = new Schema({
  title: { String, required: true },
  description: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

const Subreddit = mongoose.model("Subreddit", subredditSchema);

export default Subreddit;
