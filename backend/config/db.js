import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:8550955@cluster0.xevgy5h.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}