import mongoose, { Model, Document } from 'mongoose';

mongoose.connect(process.env.MOCK_DATABASE_URL ?? '', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

export default <T extends Model<U>, U extends Document>(model: T): void => {
  beforeAll(async () => {
    mongoose.connect(process.env.MOCK_DATABASE_URL ?? '', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    mongoose.Promise = Promise;
    await model.deleteMany({});
  });

  afterEach(async () => {
    model.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
};
