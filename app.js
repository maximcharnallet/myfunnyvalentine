// app.js // 

import express from "express"

const app = express()

app.set("view engine", "ejs");
app.use(express.static("asset"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
   res.render("question");
})

app.get("/question", (req, res)=> {
    res.render("question");
})

app.get("/yes", (req, res)=> {
    res.render("yes"); 
})

app.post("/yes", (req, res)=> {
    res.render("yes");
})



app.listen(3008, function () {
  console.log("Server listening on port 3000")
})


