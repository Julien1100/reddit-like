import { Router } from "express";
import {
  createSubreddit,
  getAllSubreddits,
  getOneSubreddit,
} from "../controllers/subredditController";
import { auth } from "../middlewares/auth";

const subredditRouter = Router();

subredditRouter.post("/new-subreddit", auth, createSubreddit);
subredditRouter.get("/r/", getAllSubreddits);
subredditRouter.get("/r/:subredditId", getOneSubreddit);

export default subredditRouter;
