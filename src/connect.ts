import * as mongoose from "mongoose";

// const MONGO_URI = "mongodb://localhost:27017/todo";

const OPTIONS = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

export default (db: string): void => {
  const connect = (): void => {
    console.log("Try connect to database...");
    mongoose
      .connect(db, OPTIONS)
      .then(() => {
        return console.log(`Successfully connected to ${db}`);
      })
      .catch(error => {
        console.log("Error connecting to database: ", error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on("disconnected", connect);
};
