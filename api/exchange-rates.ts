import type { VercelRequest, VercelResponse } from "@vercel/node";

// NOTE: it really should import .js file as in serverless runtime there is no .ts file available
// eslint-disable-next-line no-restricted-imports
import { fetchExchangeRates } from "./_api.helpers.js";

export default async function handler(_request: VercelRequest, response: VercelResponse) {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (_request.method === "OPTIONS") {
        response.status(200).end();
        return;
    }

    const result = await fetchExchangeRates();
    response.status(200).send(result);
}
