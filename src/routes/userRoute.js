import { Router } from "express";
import { login, register } from "../controllers/userController";

const authRouter = Router();

authRouter.get("/register", register);
authRouter.get("/login", login);

export default authRouter;
