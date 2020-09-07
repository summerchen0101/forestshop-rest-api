import 'module-alias/register';
import 'dotenv/config';
import express, { Express } from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import routes from '@/routes';
// import errorHandler, { handleNotFround } from './errors/handler'

mongoose.Promise = global.Promise;

export const app: Express = express();

app.use('/', routes);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(handleNotFround);
// app.use(errorHandler);

mongoose
  .connect(process.env.DATABASE_URL ?? '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Open http://localhost:${process.env.PORT}`)
    );
  })
  .catch(() => {
    console.log('Mongodb connection failed.');
  });
