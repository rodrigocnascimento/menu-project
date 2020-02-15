(require("dotenv")).config()
const express = require("express")
const cors = require("cors")

const app = express()

const { SERVER_PORT } = process.env

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const customerRoute = require("./routes/customers")
const ordersRoute = require("./routes/orders")
const nerdRoute = require("./routes/nerd")

app.use("/cliente", customerRoute)
app.use("/pedido", ordersRoute)
app.use("/nerdStats", nerdRoute)

app.listen(SERVER_PORT, console.log(`Server listening on port ${SERVER_PORT}!`))