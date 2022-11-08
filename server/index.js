const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Create a user
app.post("/users", async(req, res) => {
    try {
        const { first_name, last_name, email, created_at } = req.body;
        const newUser = await pool.query("INSERT INTO users (first_name, last_name, email, created_at) VALUES ($1, $2, $3, $4) RETURNING *", 
        [first_name, last_name, email, created_at]
        );
        res.json(newUser.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
})

// Get all users

app.get("/users", async(req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users");
        res.json(allUsers.rows);
    } catch (error) {
        console.error(err.message);
    }
})

// Get a user

// Update a user

// Delete a user


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

