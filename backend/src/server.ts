import mongoose from "mongoose";
import app  from './index.js'; 
const port = process.env.PORT || 5000;

async function main() {
  try {
    const mongouri = process.env.DB_URI;
    if (!mongouri) throw new Error("DB_URI is not defined in .env");

    await mongoose.connect(mongouri);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
    console.error("Error connecting to MongoDB or starting server:", err);
  }
}

main();