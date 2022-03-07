const express = require("express")
const mongoose = require("mongoose")
const app = express()
const methodOverride = require("method-override")
const Task = require("./model/tasks")
const router = require("./router/tasks")
app.use(methodOverride("_method", { methods: ["POST", "GET"] }))
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true })) //تسمح بقراءة البودي من المستخدم في الفورم
mongoose.connect(`mongodb://localhost:27017/toDoListDB`, { useNewUrlParser: true, useUnifiedTopology: true })

app.use("/", router)

const port = 5700
app.listen(port, () => {
  console.log("server is listening on port:", port)
})
