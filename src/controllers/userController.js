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
