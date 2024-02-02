import mongoose, { Schema, model } from "mongoose";

const subredditSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  creator: [{ type: mongoose.Schema.Types.ObjectId, ref: "Creator" }],
});

const Subreddit = mongoose.model("Subreddit", subredditSchema);

export default Subreddit;
