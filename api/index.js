const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const userRoute = require("./routes/users");
const multer=require("multer");
const path=require("path");
const cors=require("cors")

dotenv.config();
// Middleware to parse incoming JSON requests
app.use(express.json());
// Middleware to serve static files (e.g., images) from the '/images' route
app.use("/images",express.static(path.join(__dirname,"/images")));
app.use(cors(
  {
    origin:[],
    methods:["POST","GET"],
    credentials:true,
  }
))

// Connect to MongoDB using the provided URL from the environment variables
mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser: true ,
    // useFindAndModify:true
    },
    console.log("connect to MongoDB")
  )
// Multer configuration for handling file uploads
const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"images");
  },
  filename:(req,file,cb)=>{
    cb(null, req.body.name);
  }
});

const upload=multer({storage:storage})
// Route for handling file uploads


app.post("/api/upload",upload.single("file"),(req,res)=>{
  res.status(200).json("file has been uploaded");
});


app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/users", userRoute);


// Start the server on port 5000
app.listen("5000", () => {
  console.log("Backend is running.");

})
