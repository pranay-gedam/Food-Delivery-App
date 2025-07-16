import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

// app config
const app = express()
const port = process.env.PORT || 4000

// middleware
app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = [
      "https://glittering-dieffenbachia-c11d11.netlify.app",
      "https://food-admin-dashboard.netlify.app"
    ];
    if (!origin || allowedOrigins.includes(origin) || origin.endsWith(".netlify.app")) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));



// db connection
connectDB();

// api endpoint
app.use("/api/food",foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started n http://localhost:${port}`)
})

