const mongoose = require("mongoose");

module.exports.dbConnect = async () => {
  try {
    await mongoose.mongoose.connect(process.env.DB_URL);
    console.log("Connected to Database...");
  } catch (error) {
    console.log(error);
  }
};
