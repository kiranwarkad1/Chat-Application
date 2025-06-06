import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
dotenv.config({});

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json()); 

// routes
app.use("/api/v1/user",userRoute); 


app.listen(PORT , ()=>{
    connectDB();
    console.log(`server listen at ${PORT}`) ;
})


const startServer = async () => {
  try {
    await connectDB();
    console.log("✅ DB connected. Now starting server...");
    
    app.listen(PORT, () => {
      console.log(`🚀 Server listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1); // Exit the app if DB connection fails
  }
};

startServer();