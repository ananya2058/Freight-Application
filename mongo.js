const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/react-login-tut")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("Failed to connect to MongoDB:");
  })

const newSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
})

const collection = mongoose.model("collection", newSchema)

module.exports = collection