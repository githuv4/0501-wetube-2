import express from "express";
import routes from "../routes";
import {
  users,
  changePassword,
  userDetail,
  editDetail,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.home, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editDetail, editDetail);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
