import cors from 'cors';
import express, { Application, Request, Response } from 'express';
const app: Application = express();
//parser
app.use(express.json());
//cors
app.use(cors());
app.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Welecome to advanced express curd applications.',
  });
});

export default app;