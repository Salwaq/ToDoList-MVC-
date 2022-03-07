const router = require("express").Router()
const TaskControler = require("../controller/tasks")

//find all tasks
router.get("/", TaskControler.index)

//create
router.post("/create", TaskControler.create)

//update
router.get("/update/:id", TaskControler.edit)
router.put("/update/:id", TaskControler.update)

//delet
router.delete("/delete/:id", TaskControler.delete)

module.exports = router
