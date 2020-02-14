const express = require("express")
const router = express.Router()

router.get("/", (req, res, next) => res.send("server is listen you crazy nerd :D"))

module.exports = router