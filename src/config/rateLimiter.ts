import { Connection } from 'mongoose';
import { RateLimiterMongo } from 'rate-limiter-flexible';

export let rateLimiterMongo: null | RateLimiterMongo = null;
export const initRateLimiter = (mongooseConnection: Connection) => {
    rateLimiterMongo = new RateLimiterMongo({
        storeClient: mongooseConnection,
        points: 10, // 100 requests per minute
        duration: 60 // 1 minute
    });
};
