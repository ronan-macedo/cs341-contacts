import express from "express";
import { initializeDb } from "./database/connection";
import router from "./routes";

const app = express();
const port = process.env.PORT ?? 5500;

initializeDb().then(() => {
  app.use(express.json());
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  app.use('/contact', router);

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch((error) => {
  console.error('Application startup error:', error);
  process.exit(1);
});