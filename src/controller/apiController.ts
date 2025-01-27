import { NextFunction, Request, Response } from 'express';
import httpError from '../utils/httpError';
import httpResponse from '../utils/httpResponse';
import responseMessage from '../constant/responseMessage';

export default {
    self: (req: Request, res: Response, next: NextFunction) => {
        try {
            httpResponse(req, res, 200, responseMessage.SUCCESS);
        } catch (error) {
            httpError(next, error, req, 500);
        }
    }
};
