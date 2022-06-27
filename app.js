require("dotenv").config()
const express = require("express");
const cors = require("cors")
const morgan = require("morgan")
const PORT = process.env.PORT || 5000
require("colors")
const app = express();

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({ status: "success", message: "hello world" })
})

app.listen(PORT, () => {
    console.log(` SERVER STARTED AT PORT ${PORT} `.cyan.inverse.bold)
})