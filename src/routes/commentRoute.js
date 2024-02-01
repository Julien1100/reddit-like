import { Router } from "express";
import {
  createComment,
  deleteComment,
  updateComment,
} from "../controllers/commentController";

const commentRouter = Router();

commentRouter.post("/:postId/new-comment", createComment);
commentRouter.put("/:postId/:commentId/update", updateComment);
commentRouter.delete("/:postId/:commentId/delete", deleteComment);

export default commentRouter;
