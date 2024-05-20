
const mongoose = require("mongoose");

const uri = "mongodb+srv://contacttosagartambe:sagar@123@inventory-db.dysiuzp.mongodb.net/?retryWrites=true&w=majority&appName=Inventory-db";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

});

function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };
