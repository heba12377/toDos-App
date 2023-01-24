const express = require("express");
const { createTodo ,getTodo,findone, updateOne,deleteOne,} = require("../controllers/todocontrollers");
const  validator = require('../validator');
const todoRouter = express.Router();


todoRouter.post('/',validator,createTodo);
todoRouter.get('/',getTodo);
todoRouter.get('/:id',findone);
todoRouter.patch('/:id',validator,updateOne);
todoRouter.delete('/:id',deleteOne);


module.exports = todoRouter;