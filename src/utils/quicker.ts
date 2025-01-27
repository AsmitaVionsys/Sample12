import config from '../config/config';
import os from 'os';

export default {
    applicationHealth: {
        environment: config.NODE_ENV,
        uptime: `${process.uptime().toFixed(2)} seconds`,
        memoryUsage: {
            heapUsed: (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB',
            heapTotal: (process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2) + ' MB'
        }
    },

    systemHealth: {
        cpuUsage: os.loadavg(),
        totalMemory: (os.totalmem() / 1024 / 1024).toFixed(2) + ' MB',
        freeMemory: (os.freemem() / 1024 / 1024).toFixed(2) + ' MB'
    }
};
