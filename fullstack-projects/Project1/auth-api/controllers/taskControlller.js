import Task from '../models/task.model.js'


// Create new Task
export const createTask = async (req, res) => {
    const task = await Task.create({
        user: req.user._id,
        title: req.body.title,
        status: req.body.status || 'todo'
    });
    res.status(201).json(task)
}


// fetch all Task
export const getTasks = async (req, res) => {
    const tasks = await Task.find({ user: req.user._id })
    res.status(201).json(tasks)
}


// Update existing tasks
export const updateTask = async (req, res) => {
    try {
        const tasks = await Task.findById(req.params.id)

        if (!tasks) {
            return res.status(404).json({ message: "Tasks not found" })
        }

        if (tasks.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: "Not allowed" })
        }

        tasks.title = req.body.title || tasks.title
        tasks.status = req.body.status || tasks.status;

        const updated = await tasks.save()

        res.json(updated)

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })
    }
}



// delete particular tasks
export const deleteTask = async (req, res) => {
    const tasks = await Task.findById(req.params.id)
    console.log(tasks);
    

    if (!tasks) {
        return res.status(404).json({ message: "Task not found to delete" })
    }

    if (tasks.user.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: "Not allowed" })
    }

    await tasks.deleteOne()

    res.json({ message: "task Deleted" })

}

