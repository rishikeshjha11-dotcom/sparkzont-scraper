const db = require("../db");

async function saveCompany(company) {

    const sql = `
    INSERT INTO companies
    (
        cin,
        company_name,
        company_slug,
        registration_number,
        company_status,
        company_class,
        company_category,
        roc,
        state,
        incorporation_date
    )
    VALUES
    (?,?,?,?,?,?,?,?,?,?)
    ON DUPLICATE KEY UPDATE

        company_name=VALUES(company_name),
        company_status=VALUES(company_status),
        updated_at=NOW()
    `;

    await db.query(sql, [

        company.cin,
        company.company_name,
        company.company_slug,
        company.registration_number,
        company.company_status,
        company.company_class,
        company.company_category,
        company.roc,
        company.state,
        company.incorporation_date

    ]);
}

module.exports = {

    saveCompany

};