import * as express from 'express';
import { SERVER_PORT, DB_CONNECTION } from './config';
import { setupRoutes } from './routes';
import { connectToDB } from './utils';
import { initDB } from './scripts/init_db';

export const start = () => {
  const app = express();

  setupRoutes(app);

  connectToDB(DB_CONNECTION);

  initDB();

  app.listen(SERVER_PORT, () => {
    console.log('server started at http://localhost:' + SERVER_PORT);
  });
};
