import express from "express"
import authMiddelware from "../middleware/auth.js"
import { placeOrder, verifyOrder, userOrders, listOrders, updateStatus } from "../controllers/orderController.js"

const orderRouter = express.Router();

orderRouter.post("/place",authMiddelware,placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorders",authMiddelware,userOrders);
orderRouter.get("/list",listOrders);
orderRouter.post("/status",updateStatus);


export default orderRouter;