import { Request } from 'express';
import config from '../config/config';
import { EApplicationEnvironment } from '../constant/application';
import { THttpError } from '../types/types';
import responseMessage from '../constant/responseMessage';
import logger from './logger';

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export default (err: unknown | Error, req: Request, errorStatusCode: number = 500): THttpError => {
    const errorObj: THttpError = {
        success: true,
        statusCode: errorStatusCode,
        request: {
            ip: req.ip || null,
            method: req.method,
            url: req.originalUrl
        },
        message: err instanceof Error ? err.message || responseMessage.SOMETHING_WENT_WRONG : responseMessage.SOMETHING_WENT_WRONG,
        data: null,
        trace: err instanceof Error ? { error: err.stack } : null
    };

    if (config.NODE_ENV === EApplicationEnvironment.PRODUCTION) {
        delete errorObj.request.ip;
        delete errorObj.trace;
    }

    logger.info('ERROR APPLICATION', {
        meta: {
            returns: errorObj
        }
    });

    return errorObj;
};
