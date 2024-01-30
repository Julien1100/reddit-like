import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

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

userSchema.methods.encrypt = async (password) => {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

const User = model("User", userSchema);

export default User;
