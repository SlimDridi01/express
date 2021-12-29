const express = require("express");
const app = express();
const path = require("path");

const PORT = 4000;
//Middleware
app.use(express.static(path.join(__dirname, "/Project")));

app.use(
  (time = (req, res, next) => {
    let Day = new Date().getDay();
    let Hour = new Date().getHours();

    if ((Day <= 1 || Day >= 5) && (Hour <= 9 || Hour >= 17)) {
      res.send("<h1>arja3 8odwa</h1>");
    } else {
      next();
    }
  })
);
//Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/Project/Home.html"));
});
app.get("/Contact", (req, res) => {
  res.sendFile(path.join(__dirname, "/Project/Contact.html"));
});
app.get("/Services", (req, res) => {
  res.sendFile(path.join(__dirname, "/Project/Services.html"));
});
//Server Listen
app.listen(PORT, console.log(`server is runing on port ${PORT}`));
