import mongoose, { Schema, model } from "mongoose";

const commentSchema = new Schema({
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
});

const Comment = model("Comment", commentSchema);

export default Comment;
