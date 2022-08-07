const mongoose = require("mongoose");

const connectionString = "mongodb+srv://TBfan:MAxiKFMNaT6hokP0@nodetuts.odngg.mongodb.net/?retryWrites=true&w=majority"
const connOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const init = async () => {
    await mongoose.connect(connectionString, connOptions);
    console.log("connected");
    console.log("alpha");
};

init();