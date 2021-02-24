const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { config } = require("dotenv");
const cors = require("cors");

config();

const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(`${process.env.MONGO_URL}`, { useNewUrlParser: true, useUnifiedTopology: true });

require("./models/Article");
app.get("/", (req, res) => {
    res.json({ title: "Blog API", author: "Francisco Cajlon", version: "1.1" })
});
app.use("/api", require("./routes"));

app.listen(port, () => console.log("\x1b[36m", `\nServer running in http://localhost:${port}`));