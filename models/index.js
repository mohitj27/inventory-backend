
const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/InventoryManagement";

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