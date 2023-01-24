const Todo = require("../models/todosModel");
const Joi = require('joi');
const validator = require('../validator');

const createTodo = async (req, res, next) => {
    try {
        const{title,status} = req.body;
        const newTDO = new Todo({
            title,
            status
        })
        await newTDO.save();
        res.status(204).json();
    } catch (error) {
        next(error);
    }
}

const getTodo = async (req, res) => {
    try {
        const filter = {}
        const { status, title } = req.query;

        if (status) {
            filter.status = status
        }
        if (title) filter.title = title

        const result = await Todo.find(filter);
        res.status(200).send(result);

    } catch (error) {
        next(error);
    }
}
const findone = async (req, res) => {
    try {
        const { id } = req.params;
        const find = await Todo.findById(id);
        res.status(200).send(find);
    } catch (error) {
        next(error);
    }
}

const updateOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, status } = req.body;
        await Todo.findByIdAndUpdate(id, { title, status });
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}

const deleteOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}


module.exports = {
    createTodo,
    getTodo,
    findone,
    updateOne,
    deleteOne,
    validator
}