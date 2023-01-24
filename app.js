const express = require('express');
const mongoose = require('mongoose');
const todoRouter = require("./routes/todoRoutes")

const app = express();
const port = 8080;

mongoose.connect('mongodb://127.0.0.1:27017/todos').then( ()=> {
    console.log("connected to databse succesfully")
});

app.use(express.json());
app.use('/todos',todoRouter)
app.use((err, req, res, next) => {
    if (!err.statusCode) err.message = "something went wrong";
    res.status(err.statusCode || 500).send(err.message);
})

app.listen(port,()=>{
    console.log(`server now listen on port ${port}`);
})