import express from "express";
import { getstateController } from "../controllers/statesController.js";
 

//router object
const router = express.Router();


router.get("/states", getstateController);

export default router;