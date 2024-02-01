import { Router } from "express";
import { createComment, updateComment } from "../controllers/commentController";

const commentRouter = Router();

commentRouter.post("/:postId/new-comment", createComment);
commentRouter.put("/:postId/:commentId/update", updateComment);

export default commentRouter;
