const express = require("express");
const router = express.Router();

const { runScraper } = require("../services/scraper");

router.get("/run", async (req, res) => {

    try {

        const result = await runScraper();

        res.json(result);

    } catch (e) {

        res.status(500).json({

            success: false,
            error: e.message

        });

    }

});

module.exports = router;