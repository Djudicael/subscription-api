import { express, bodyParser } from '../deps.mjs';

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

import  ProductRouter from './routes/ProductRouter.mjs';
app.use('/api/v1/subscription', ProductRouter);

export default app;