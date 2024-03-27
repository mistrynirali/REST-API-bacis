const mongoose = require("mongoose")



const connectDB = (uri) => {
    console.log("Connect Db");
    return mongoose.connect(uri, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    });

}

module.exports = connectDB;