const express = require("express");
const taskRouter = express.Router();
const {insertTask, showData, delData, upDate} = require("../controllers/taskController");

taskRouter.post ('/', insertTask);
taskRouter.get ('/show',showData);
taskRouter.delete('/delete/:id',delData);
taskRouter.put('/update/:id',upDate);
module.exports = taskRouter;