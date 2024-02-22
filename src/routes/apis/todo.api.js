import express from 'express';
const router = express.Router();
import { todocontroller } from '../../controllers/todo.controller.js';
router.post('/',todocontroller.create)
router.get('/',todocontroller.getall)
router.delete('/:id',todocontroller.delete)
router.put('/:id',todocontroller.update)
export default router;
