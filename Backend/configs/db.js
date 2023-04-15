const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env", override: true });
try {
  mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log(`DATABASE CONNECTED`.bgCyan);
  });
} catch (error) {
  console.log(error);
}
