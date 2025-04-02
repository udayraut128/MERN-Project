
const express =require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB COnnected"))
.catch((err) => console.log("MongoDB Connection Error:",err));

app.get("/",(req,res)=>{
    res.send("Backend is Running...");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));