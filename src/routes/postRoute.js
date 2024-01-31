import { Router } from "express";
import { createPost, getAllPosts } from "../controllers/postController";

const postRouter = Router();

postRouter.post("/submit", createPost);
postRouter.get("/", getAllPosts);

export default postRouter;
