const mongoose = require('mongoose');

const mongooseOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, mongooseOptions);
        console.log(`MongoDB conected: ${conn.connection.host}`)
    } catch(errror) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;