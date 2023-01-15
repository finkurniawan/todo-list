import { config as dotenv } from 'dotenv';
import App from './app';

dotenv();

const PORT = process.env.APP_PORT || 8000;
const { APP } = new App();

APP.listen(PORT, () => {
  console.log(`Running At : http://localhost:${PORT}`);
});

export default APP;
