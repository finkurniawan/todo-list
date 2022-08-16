import { config as dotenv } from 'dotenv';
import App from './app';

dotenv();

const PORT = process.env.PORT || 8000;
const { APP } = new App();

APP.listen(PORT, () => {
  console.log(`Running At : http://localhost:${PORT}`);
  console.log(process.env.DB_HOST, process.env.DB_HOST_DATABASE);
});
