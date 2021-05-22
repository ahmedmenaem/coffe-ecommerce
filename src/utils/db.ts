import { connect } from 'mongoose';

export const connectToDB = async (dbConnection: string) => {
  await connect(dbConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
