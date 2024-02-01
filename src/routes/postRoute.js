import { Router } from "express";
import {
  createPost,
  createPostInSubreddit,
  getAllPosts,
} from "../controllers/postController";
import { auth } from "../middlewares/auth";

const postRouter = Router();

postRouter.post("/submit", auth, createPost);
postRouter.post("/r/:subredditId/submit", auth, createPostInSubreddit);
postRouter.get("/", getAllPosts);

export default postRouter;
