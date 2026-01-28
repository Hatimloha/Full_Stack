import Note from "../models/Note.model.js";


// Create Notes
export const createNote = async (req, res) => {

    console.log('CreateNote is under use');
    
    const note = await Note.create({
        user: req.user._id,
        title: req.body.title,
        description: req.body.description
    })

    res.status(201).json(note)
}


// fetch Note: read
export const getNotes = async (req, res) => {
    const notes = await Note.find({ user: req.user._id })
    res.json(notes)
}


// Update Notes
export const updateNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(400).json({ message: 'notes nhi milla bhai' })

    if (note.user.toString() !== req.user._id.toString()) return res.status(401).json({message: 'not allowed'})

    note.title = req.body.title || note.title
    note.description = req.body.description || note.description


    const updated = await note.save();

    res.json(updated)
}


export const deleteNote = async (req, res) => {
    const note = await Note.findById(req.params.id)

    if (!note) return res.status(404).json({ message: 'Note not found' })

    if (note.user.toString() !== note.user._id.toString()) return res.status(401).json({ message: 'not allowed' })

        await note.deleteOne()

    res.json({ message: 'Note deleted'})

}
