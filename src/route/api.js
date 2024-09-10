import express from "express";
import userController from "../controller/user-controller.js";
import { authMiddleware } from "../middleware/auth-middlware.js";

const userRouter = express.Router();
userRouter.use(authMiddleware);

userRouter.get("/api/users/current", userController.get);
userRouter.patch("/api/users/current", userController.update);

export { userRouter };
