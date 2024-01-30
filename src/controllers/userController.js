import { error } from "console";
import User from "../models/userModel";

const register = async (req, res) => {
  try {
    const newUser = await new User();
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser.userName = req.body.userName;
    newUser.email = req.body.email;
    newUser.password = await newUser.encrypt(req.body.password);
    await newUser.save();
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur lors de l'inscription");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select("+password");
    const verify = await User.passwordVerification(password, user.password);
    if (!verify) {
      const error = new Error("Mot de passe invalide");
      throw error;
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur lors de la connexion");
  }
};

export { register, login };
