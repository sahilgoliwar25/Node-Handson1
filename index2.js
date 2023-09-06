const express = require("express");
const cors = require("cors");
const dummydata = require("./dummydata");
const jsonObject = [
  {
    name: "Sahil",
    course: "FullStack Developer",
    batch: "EA23",
  },
  {
    name: "Dinesh",
    course: "FullStack Developer",
    batch: "EA23",
  },
  {
    name: "Prashant",
    course: "FullStack Developer",
    batch: "EA23",
  },
];
const arr = [];

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json()); //Body Parser

app.get("/aboutus", (req, res) => {
  res.send("About Us");
});
app.get("/contact", (req, res) => {
  res.send(dummydata);
});
app.post("/login", (req, res) => {
  const data = req.body;
  console.log(data);
  arr.push(data);
  res.send(arr);
});
app.get("/", (req, res) => {
  res.send("This is Home");
});
app.get("/fetch", (req, res) => {
  res.send(jsonObject);
});

app.listen(5001, () => {
  console.log("Server is running on 5001");
});
