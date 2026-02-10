const app = require('./app');
const dotevn = require('dotenv').config();
const connectionDB = require('./config/db');
PORT= 3000;
connectionDB();
app.listen(PORT,()=>{
    console.log('task flow running on server '+ PORT);
});
