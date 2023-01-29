import { config as dotenv } from 'dotenv';
import cluster from 'cluster';
import { cpus } from 'os';
import process from 'process';
import App from './app';

dotenv();
console.log(process.env.APP_PORT);
const PORT = process.env.APP_PORT || 8000;
const { APP } = new App();
const numCPUs = cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  APP.listen(PORT, () => {
    console.log(`Running At : http://localhost:${PORT}`);
  });
  console.log(`Worker ${process.pid} started`);
}
export default APP;
