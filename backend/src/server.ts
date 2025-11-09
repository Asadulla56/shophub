import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./index.js";

dotenv.config();

const port = process.env.PORT || 5000;

async function main() {
  try {
    await mongoose.connect(process.env.DB_URI as string);
    console.log(" MongoDB connected");

    app.listen(port, () => {
      console.log(` Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(" DB connection error:", error);
    process.exit(1);
  }
}

main();
