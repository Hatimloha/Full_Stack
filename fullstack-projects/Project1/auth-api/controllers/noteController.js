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

    const page = Number(req.query.page) || 1;
    const limit = 5;
    const skip =(page - 1) * limit

    const keyword = req.query.search ? {title: {$regex: req.query.search, $options: "i"}} : {};

    const notes = await Note.find({
        user: req.user._id,
        ...keyword
    })
        .limit(limit)
        .skip(skip);

    const total = await Note.countDocuments({
        user: req.user._id,
        ...keyword
    })

    res.json({
        notes, 
        page,
        pages: Math.ceil(total / limit)
    })    

    // ## without Search + Pagination (Notes API)
    // const notes = await Note.find({ user: req.user._id })
    // res.json(notes)
}


// Update Notes
export const updateNote = async (req, res) => {
    try {
        const notes = await Note.findById(req.params.id)

        console.log(notes);


        if (!notes) {
            return res.status(404).json({ message: 'Note not found' })
        }

        if (notes.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: "Not allowed" })
        }

        notes.title = req.body.title || notes.title
        notes.description = req.body.description || notes.description

        const updated = await notes.save()

        res.json(updated)
    } catch (error) {
        console.log(error);
        res.json(500).json({ message: `This is to check it reaching this part or not ${error.message}` })
    };
}


export const deleteNote = async (req, res) => {
    const note = await Note.findById(req.params.id)

    if (!note) return res.status(404).json({ message: 'Note not found' })

    if (note.user.toString() !== note.user._id.toString()) return res.status(401).json({ message: 'not allowed' })

    await note.deleteOne()

    res.json({ message: 'Note deleted' })

}
