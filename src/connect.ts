import mongoose from "mongoose";

async function connect(db: string) {
  try {
    await mongoose.connect(db);
    console.log("DB connected");
  } catch (error) {
    console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${error.message}`);
  }
}
export default connect;
