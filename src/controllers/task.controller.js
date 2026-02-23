import Task from "../models/Task.js"

export async function getTask(req, res) {
    const task = await Task.find().sort({ createdAt: -1})
    res.json(task)
}

export async function createTask(req, res) {
    const {title} = req.body
    if (title) return res.status(400).json({ message:" Titulo es requerido"})

    const task = await Task.create({ title })
    res.status(201).json(task)    
}

export async function updateTask(req, res) {
    const { id} = req.params
    const update = await Task.findByIdAnddUpdate(id, req.body, { new: true})
    if (!update) return res.status(404).json({ message: "No existe"});
    res.json(update)
}

export async function deleteTask(req, res) {
    const { id} = req.params
    const deleted = await Task.findByIdAnddDelete(id);
    if (!deleted) return res.status(404).json({ message: "No existe"});
    res.json({ok_: true})
}