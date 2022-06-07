const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3001;
const connect=require("./src/configs/db")
const {register,login} = require("./src/controller/auth.controller")
const userController = require("./src/controller/user.controller")
const infoController = require("./src/controller/info.controller")
const eventController = require("./src/controller/event.controller")
const cors =require("cors")
const app = express();
app.use(express.json())
app.use(cors())
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.post("/register",register);
app.post("/login",login)
app.use("/users",userController)
app.use("/info",infoController)
app.use("/event",eventController)
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, async (req,res) => {
  try {
    await connect();
    console.log(`Connected to port ${PORT}`)
} catch (e) {
    console.log('e:', e)
}
});