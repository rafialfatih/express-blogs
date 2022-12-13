import express from "express";
import { UsersController } from "../controllers/UsersController";

export const router = express.Router();

router.get("/", UsersController.index);
router.post("/", UsersController.create);
router.get("/:id", UsersController.find);
router.put("/:id", UsersController.update);
router.delete("/:id", UsersController.delete);
