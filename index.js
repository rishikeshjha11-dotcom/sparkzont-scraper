<<<<<<< HEAD
const express = require("express");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// Routes
const scraperRoute = require("./routes/scraper");
app.use("/scraper", scraperRoute);

// Health Check
=======
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// ==========================
// Middleware
// ==========================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==========================
// Routes
// ==========================
const apiRoute = require("./routes/api");
const scraperRoute = require("./routes/scraper");

app.use("/api", apiRoute);
app.use("/scraper", scraperRoute);

// ==========================
// Root Route
// ==========================
>>>>>>> 0be6ffe11eb19e5ea387bd5785bc6cbd9c2835e6
app.get("/", (req, res) => {
    res.json({
        status: true,
        project: "Sparkzont MCA Scraper",
        version: "1.0"
    });
});

<<<<<<< HEAD
=======
// ==========================
// 404 Handler
// ==========================
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// ==========================
// Error Handler
// ==========================
app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        success: false,
        message: err.message
    });
});

// ==========================
// Start Server
// ==========================
>>>>>>> 0be6ffe11eb19e5ea387bd5785bc6cbd9c2835e6
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
<<<<<<< HEAD
});
=======
});
>>>>>>> 0be6ffe11eb19e5ea387bd5785bc6cbd9c2835e6
