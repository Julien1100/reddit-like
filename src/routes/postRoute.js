import { Router } from "express";
import {
  createPost,
  createPostInSubreddit,
  getAllPosts,
} from "../controllers/postController";

const postRouter = Router();

postRouter.post("/submit", createPost);
postRouter.post("/r/:subredditId/submit", createPostInSubreddit);
postRouter.get("/", getAllPosts);

export default postRouter;
