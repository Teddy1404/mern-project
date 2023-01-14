const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
mongoose.set("strictQuery", true);
dotenv.config({ path: "./config.env" });
 require("./db/conn");

const User = require('./models/user')
app.use(express.json());
app.use(require('./router/auth'));
const PORT = process.env.PORT;

const middleware = () => {
  console.log("This is middleware");
};
middleware();

app.get('/',(req,res)=>{
    res.send("This is homepage")
})

app.get("/about", (req, res) => {
  res.send("This is aboutpage");
});

app.get("/contact", (req, res) => {
  res.send("This is contactpage");
});

// app.get("/signin", (req, res) => {
//   res.send("This is signinpage");
// });

app.get("/signup", (req, res) => {
  res.send("This is signupage");
});

app.listen(PORT, () => {
  console.log(`This server is running on the port ${PORT}`);
});
