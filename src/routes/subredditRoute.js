import { Router } from "express";
import {
  createSubreddit,
  getAllSubreddits,
} from "../controllers/subredditController";

const subredditRouter = Router();

subredditRouter.post("/new-subreddit", createSubreddit);
subredditRouter.get("/r/", getAllSubreddits);

export default subredditRouter;
