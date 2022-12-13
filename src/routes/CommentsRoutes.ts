import express from "express";
import { CommentsController } from "../controllers/CommentsController";

export const router = express.Router();

router.get("/user/:id", CommentsController.show);
router.post("/", CommentsController.create);
router.put("/:id", CommentsController.update);
router.delete("/:id", CommentsController.delete);
