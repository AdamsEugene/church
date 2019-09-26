const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Stragy;
const app = express();

passport.use(new GoogleStrategy())

app.get("/", (req, res) => {
    res.send({ name: "adams" });
})


const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log("Server is runing on port 5000");