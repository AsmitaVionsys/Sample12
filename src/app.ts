import express, { NextFunction, Request, Response } from 'express';
import router from './routes/apiRoutes';
import path from 'path';
import globalErrorHandler from './middleware/globalErrorHandler';
import responseMessage from './constant/responseMessage';
import httpError from './utils/httpError';
import helmet from 'helmet';
import cors from 'cors';
import config from './config/config';

const app = express();
app.use(helmet());
app.use(
    cors({
        origin: [config.FRONTEND_URL as string],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'],
        credentials: true
    })
);

app.use(express.json());
app.use(express.static(path.join(__dirname, '../', 'public')));
app.use('/api/v1', router);

app.use((req: Request, _: Response, next: NextFunction) => {
    const error = new Error(responseMessage.NOT_FOUND('route'));
    httpError(next, error, req, 404);
});

app.use(globalErrorHandler);

export default app;
