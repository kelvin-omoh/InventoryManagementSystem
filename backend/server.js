import express from "express";
import cors from "cors";
import restaurants from './api/restaurants.route.js';

const app = express(); // Create the Express application

app.use(cors()); // Apply middleware for enabling communication between different domains
app.use(express.json()); // Allow parsing of incoming JSON data from client requests
app.use('/api/v1/restaurants', restaurants); // Set up routing and functionality for handling requests
app.use("*", (req, res) => res.status(404).json({ error: "Not found" })); // Handle 404 Not Found errors

export default app;
