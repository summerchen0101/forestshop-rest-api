import mongoose from 'mongoose';
import app from './app';

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
