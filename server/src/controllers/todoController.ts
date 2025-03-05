import { Request, Response } from "express";
import * as todoService from '../services/todoService';

const getAllTodos = (req:Request, res:Response) => {
    const allTodos = todoService.getAllTodos();
    res.send("Get all todos");
};

const getOneTodo = (req:Request, res:Response) => {
    const todo = todoService.getOneTodo();
    res.send("Get an existing todo");
};

const createNewTodo = (req:Request, res:Response) => {
    const createdTodo = todoService.createNewTodo();
    res.send("Create a new todo");
};

const updateOneTodo = (req:Request, res:Response) => {
    const updatedTodo = todoService.updateOneTodo();
    res.send("Update an existing todo");
};

const deleteOneTodo = (req:Request, res:Response) => {
    todoService.deleteOneTodo();
    res.send("Delete an existing todo");
};

export {
    getAllTodos,
    getOneTodo,
    createNewTodo,
    updateOneTodo,
    deleteOneTodo,
}