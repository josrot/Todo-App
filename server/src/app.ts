import express, {Request, Response} from 'express';
import {router as v1Router} from './v1/routes/todoRoutes';
const app = express();
const port = process.env.PORT || 3001;

app.use("/api/v1/todos", v1Router);

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
})