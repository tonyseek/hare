import url from 'url';

const apiUrl = url.parse(process.env.HARE_API_URL || 'https://api.github.com');

export const DEBUG = process.env.NODE_ENV == 'development';
export const API_DOMAIN = apiUrl.host;
export const API_HTTPS = apiUrl.protocol === 'https:';
