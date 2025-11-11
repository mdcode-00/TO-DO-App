import express from 'express';
import { addTodoController, deleteTodoController, getTodosController, updateTodoController, getTodosByIdController } from '../controller/to-do.controller.js';

const router = express.Router();


router.post('/add-todo', addTodoController);
router.get('/', getTodosController);
router.put('/update-todo/:_id', updateTodoController);
router.delete('/delete-todo/:_id', deleteTodoController);
router.get('/todo/:_id', getTodosByIdController);


export default router;
