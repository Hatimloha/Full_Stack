import express from 'express'
import protect from '../middleware/authMiddleware.js'
import {
    createNote,
    updateNote,
    deleteNote,
    getNotes
} from '../controllers/noteController.js'


const router = express.Router()

router.use(protect)

router.post('/', createNote);
router.get('/', getNotes);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router