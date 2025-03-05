import express, {Request, Response} from 'express';
import * as todoController from '../../controllers/todoController';
const router = express.Router();

router.get("/", todoController.getAllTodos);

router.get("/:todoId", todoController.getOneTodo);

router.post("/", todoController.createNewTodo);

router.patch("/:todoId", todoController.updateOneTodo);

router.delete("/:todoId", todoController.deleteOneTodo);

export {router};