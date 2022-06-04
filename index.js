const connection = require('./db')
const express = require('express')
const cors = require('cors')
const app = express()
const tasks = require("./routes/tasks")

connection();

app.use(express.json())
app.use(cors());

app.use("/api/tasks",tasks)

const port = process.env.PORT || 8088;
app.listen(port,()=> console.log(`listening on port ${port}....`))