import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./route/book.route.js"; 
import userRoute from "./route/user.route.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGOURI;
console.log(URI)

// connect to MongoDB
mongoose.connect(URI)
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.log("Error connecting to MongoDB:", error);
});

app.use("/book",bookRoute);
app.use("/user",userRoute);

app.get("/",(req,res)=>{
  res.send("working")
}) 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


