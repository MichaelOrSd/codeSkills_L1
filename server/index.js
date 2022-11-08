const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json());

// Routes

app.post("/users", async(req, res) => {
    try {
        console.log(req.body);
    } catch (err) {
        console.error(err.message);
    }
})

// Create a todo

// Get all todos

// Get a todo

// Update a todo

// Delete a todo


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

