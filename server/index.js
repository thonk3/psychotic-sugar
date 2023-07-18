const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());


// route
app.get("/", (req, res) => {
    res.status(201).json({message: "Connected to Backend!"});
});

app.listen(4000, () => {
    console.log(
        `Server running on localhost:4000`
    );
});
