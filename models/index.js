
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://jain-mohit:quizapp@cluster0.y0dfaw8.mongodb.net/inventory?retryWrites=true&w=majority";

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
