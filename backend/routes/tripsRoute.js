import express from "express";
 import {
   gettripsController,
   dateTripsController,
   queryTripsController,
   posttripsController
} from "../controllers/tripsController.js";
 

//router object
const router = express.Router();

//routing
//get trips
router.get("/gettrips", gettripsController);
//get trips by date
router.get("/tripsbydate", dateTripsController);


//get trips by query
router.get("/tripsbyquery", queryTripsController);

//post trips
 router.post("/posttrips", posttripsController);



export default router;