import express from 'express';
import { addTodoController, deleteTodoController, getTodosController, updateTodoController, homeController } from '../controller/to-do.controller.js';

const router = express.Router();

router.get('/', homeController);
router.post('/add-todo', addTodoController);
router.get('/get-todos', getTodosController);
router.put('/update-todo/:id', updateTodoController);
router.delete('/delete-todo/:id', deleteTodoController);


export default router;
