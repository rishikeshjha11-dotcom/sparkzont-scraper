const { saveCompany } = require("./database");
const { parseCompany } = require("./parser");
const log = require("../utils/logger");

async function runScraper() {

    log("Scraper Started");

    const company = {

        cin: "U12345DL2026PTC000001",

        company_name: "Sparkzont Technologies Private Limited",

        registration_number: "000001",

        company_status: "Active",

        company_class: "Private",

        company_category: "Company limited by Shares",

        roc: "RoC-Delhi",

        state: "Delhi",

        incorporation_date: "2026-08-01"

    };

    const parsed = parseCompany(company);

    await saveCompany(parsed);

    log("Company Saved");

    return {

        success: true

    };

}

module.exports = {

    runScraper

};