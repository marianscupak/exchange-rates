import { z } from "zod";

import { rateSchema } from "store/api/schema";

export type ExchangeRate = z.infer<typeof rateSchema>;
