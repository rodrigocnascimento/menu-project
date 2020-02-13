(require("dotenv")).config()
const express = require("express")
const cors = require("cors")

const app = express()

const { SERVER_PORT } = process.env

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const testRoute = require("./routes/test")

app.use("/test", testRoute)

app.listen(SERVER_PORT, () => console.log(`Server listening on SERVER_port ${SERVER_PORT}!`))