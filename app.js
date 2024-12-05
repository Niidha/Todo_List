require("dotenv").config()

const express = require("express")

const todoRouter = require("./route/todo.route")

const db=require("./config/db")
const app = express()
db.connectDB()

app.use(express.json())

app.use("/v1", todoRouter)


app.listen(process.env.PORT, (error) => {
    if (error) {
        return process.exit(1)
    }
    console.log("Server running on port", process.env.PORT)
})
