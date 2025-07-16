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
  origin: [
    "https://glittering-dieffenbachia-c11d11.netlify.app",
    /\.netlify\.app$/   // wildcard for deploy previews (optional)
  ],
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

