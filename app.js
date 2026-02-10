const express= require('express');
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());


const taskRouter = require('./routes/taskRoutes');
const uRouter = require('./routes/userRoutes');

app.use('/api/tasks', taskRouter);
app.use('/api/users', uRouter);
module.exports = app;