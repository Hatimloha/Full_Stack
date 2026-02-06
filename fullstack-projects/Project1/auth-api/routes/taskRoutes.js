import express from 'express'
import protect from '../middleware/authMiddleware.js';
import { 
    createTask,
    deleteTask,
    updateTask,
    getTasks,
 } from '../controllers/taskControlller.js';


const router = express.Router()

router.use(protect)

router.post('/', createTask)
router.get('/', getTasks)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

export default router