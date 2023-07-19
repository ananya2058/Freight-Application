const express = require("express")
const cors = require("cors")
const collection = require("./mongo")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/", cors(), (req, res) => {
  // Handle GET request
})

app.post("/", async (req, res) => {
  const { name, contactNumber, email, notes, dateOfBirth } = req.body

  const data = {
    name: name,
    contactNumber: contactNumber,
    email: email,
    notes: notes,
    dateOfBirth: dateOfBirth,
  }

  await collection.insertMany([data])

  // Send response or perform additional actions

}
)

app.listen(8000, () => {
  console.log("Server is running on port 8000")
})