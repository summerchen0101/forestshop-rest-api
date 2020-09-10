import 'module-alias/register';
import 'dotenv/config';
import express, { Express, Errback, Request, Response } from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import routes from '@/routes';
import createError from 'http-errors';

mongoose.Promise = global.Promise;

const app: Express = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(handleNotFround);
// app.use(errorHandler);
app.use('/', routes);

app.use((req, res) => {
  res
    .status(404)
    .json(createError(404, 'Sorry! The Page is Not Found!', { code: 4001 }));
});
app.use((err: Errback, req: Request, res: Response) => {
  res.status(500).json(createError(500, err, { code: 5001 }));
});

export default app;
