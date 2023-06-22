import express from "express";
import { bookingTicketsController, queryTicketsController } from "../controllers/TicketsController.js";
 

//router object
const router = express.Router();

//routing post booked Tickets

 router.post("/bookingticket", bookingTicketsController);
 router.get("/gettickets", queryTicketsController);
 



export default router;