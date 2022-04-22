
const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
require('dotenv').config()
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://tue2910:tue291000@mern.8rglw.mongodb.net/MERNproject?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
connectDB();
const app = express();
app.use(express.json())
app.use('/api/auth',authRouter)
const PORT = 5000;
app.listen(PORT, () => console.log("server started"));
