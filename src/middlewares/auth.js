import jwt from "jsonwebtoken";
import "dotenv/config";

const auth = (req, res, next) => {
  // Get the token in the header authorization
  const tokenHeader = req.headers.authorization;
  const token = tokenHeader.split(" ")[1];

  // Verify if token exist
  if (!token) {
    return res.status(401).send("Accès non authorisé");
  }

  // Verify token validity
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Store decrypted user's datas to req
    req.user = {
      id: decoded.id,
      email: decoded.email,
    };
    next();
  } catch (error) {
    res.status(401).send("Token invalide");
  }
};

const generateAuthToken = ({ user }) => {
  const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "7d" });
  return token;
};

export { auth, generateAuthToken };
