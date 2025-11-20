const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Hello from homepage!")
})
app.get("/about", (req, res) => {
  res.send("Hello! \n " + req.query.name + "\n")
})
app.get("/login", (req, res) => {
  res.send("Hello from login page!")
})

app.post("/login", (req, res) => {
  res.send("Hello from login page!")
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000")
})
