import mongoose, { Schema, model } from "mongoose";

const commentSchema = new Schema({
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  posts: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
});

const Comment = model("Comment", commentSchema);
