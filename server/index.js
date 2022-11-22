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

    } catch (error) {
        console.error(error.message);
    }
})

// Get all users
app.get("/users", async(req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users");
        res.json(allUsers.rows);
    } catch (error) {
        console.error(error.message);
    }
})

// Get a user by id
app.get("/users/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const user = await pool.query("SELECT * FROM users WHERE id = $1", 
        [id]);
        res.json(user.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})


// Update a user
app.put("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { first_name, last_name, email, created_at } = req.body;
        const updateUser = await pool.query("UPDATE users SET first_name = $1, last_name = $2, email = $3, created_at = $4 WHERE id = $5", 
        [ first_name, last_name, email, created_at, id ]);
        res.json("User was updated!");
    } catch (error) {
        console.error(error.message);
    }
})

// Delete a user
app.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { first_name } = req.body;
        const { last_name } = req.body;
        const deleteUser = await pool.query("DELETE FROM users WHERE id = $1",
        [id]);
        res.json(`User was deleted! id:${id}, name:${first_name} ${last_name}`);
    } catch (error) {
        console.error(error.message);
    }
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

