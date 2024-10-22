import "dotenv/config";

import express, { Request, Response } from "express";

import { fetchExchangeRates } from "./_api.helpers";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const handler = async (req: Request, res: Response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }

    const result = await fetchExchangeRates();
    res.status(200).send(result);
};

app.get("/api/exchange-rates", handler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
