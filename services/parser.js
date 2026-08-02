function parseCompany(raw) {

    return {

        cin: raw.cin,

        company_name: raw.company_name,

        company_slug: raw.company_name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-"),

        registration_number: raw.registration_number,

        company_status: raw.company_status,

        company_class: raw.company_class,

        company_category: raw.company_category,

        roc: raw.roc,

        state: raw.state,

        incorporation_date: raw.incorporation_date

    };

}

module.exports = {

    parseCompany

};