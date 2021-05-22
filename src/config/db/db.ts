export const DB_HOST = process.env['DB_HOST'] || "0.0.0.0";
export const DB_PORT = process.env['DB_PORT'] || 27017;
export const DB_NAME = process.env['DB_NAME'] || 'coffe_ecommerce_db';
export const DB_CONNECTION = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;