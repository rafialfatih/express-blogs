import express from "express";
import { PostsController } from "../controllers/PostsController";

export const router = express.Router();

router.get("/getuserposts/:id", PostsController.getPostsByUser);

router.get("/", PostsController.index);
router.post("/", PostsController.create);
router.get("/:id", PostsController.find);
router.put("/:id", PostsController.update);
router.delete("/:id", PostsController.delete);
