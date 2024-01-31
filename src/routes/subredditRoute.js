import { Router } from "express";
import {
  createSubreddit,
  getAllSubreddits,
  getOneSubreddit,
} from "../controllers/subredditController";

const subredditRouter = Router();

subredditRouter.post("/new-subreddit", createSubreddit);
subredditRouter.get("/r/", getAllSubreddits);
subredditRouter.get("/r/:subredditId", getOneSubreddit);

export default subredditRouter;
