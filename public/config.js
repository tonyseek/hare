import url from 'url';

export const DEBUG = process.env.NODE_ENV == 'development';
export const LOG_FORMAT = process.env.LOG_FORMAT || 'combined';
export const API_URL = process.env.HARE_API_URL || 'https://api.github.com';
export const API_URL_INFO = url.parse(API_URL);
export const API_DOMAIN = API_URL_INFO.host;
export const API_HTTPS = API_URL_INFO.protocol === 'https:';
