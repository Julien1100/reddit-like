import mongoose, { Schema, model } from "mongoose";

const postSchema = new Schema({
  title: { type: String, required: true },
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

const Post = model("Post", postSchema);

export default Post;
