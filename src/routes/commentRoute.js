import { Router } from "express";
import { createComment } from "../controllers/commentController";

const commentRouter = Router();

commentRouter.post("/:postId/new-comment", createComment);

export default commentRouter;
