import mongoose from "mongoose";

export default (db: string) => {
  const connect = async () => {
    mongoose
      .connect(db)
      .then(() => {
        return console.info(`Successfully connected to ${db}`);
      })
      .catch((error) => {
        mongoose.connection.on("error", (err) => {
          console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
        });
      });
  };
  connect();

  mongoose.connection.on("disconnected", connect);
};
