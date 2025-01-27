import app from './app';
import config from './config/config';
import logger from './utils/logger';

const server = app.listen(config.PORT);

export default () => {
    try {
        logger.info('RUNNING APPLICATION', {
            meta: {
                PORT: config.PORT,
                SERVER_URL: config.SERVER_URL
            }
        });
    } catch (error) {
        logger.error('APPLICATION ERROR', { meta: error });

        server.close((error) => {
            logger.error('SERVER CLOSE ERROR', { meta: error });

            process.exit(1);
        });
    }
};
