const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(
      process.env.MONGO_URI, 
      { useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true 
      },
      () => console.log('mongoDB connected ...')
      );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = dbConnect;