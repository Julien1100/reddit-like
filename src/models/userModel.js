import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
  firstName: { String, required: true },
  lastName: { String, required: true },
  userName: { String, required: true },
  email: { String, required: true, unique: true },
  password: {
    String,
    required: true,
    min: [6, "Must be at least 6 characters"],
  },
});

const User = model("User", userSchema);

export default User;
