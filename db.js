const mongoose = require('mongoose');

const connectToDatabase = async ({ database }) => {
  try {
    await mongoose.connect(
      `mongodb+srv://kristian:YbQcIfyMKTYEOpZXAsrzfIAAUwtwnQpJxMZTpHvSWCDHxdC@cluster0.ccmr2.mongodb.net/todos?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectToDatabase;

module.exports = { connectToDatabase };
