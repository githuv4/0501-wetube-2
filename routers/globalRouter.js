import express from "express";
import routes from "../routes";
import { home } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, (req, res) => res.send("Join"));
globalRouter.get(routes.login, (req, res) => res.send("Login"));
globalRouter.get(routes.logout, (req, res) => res.send("Log out"));
globalRouter.get(routes.search, (req, res) => res.send("Search"));

export default globalRouter;
