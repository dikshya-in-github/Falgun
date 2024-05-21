const express = require("express")
const app = express()
const mongoose = require("mongoose")

const Schema = mongoose.Schema
const TodosSchema = new Schema({
    title: String,
    status: Boolean,
})

const Todo = mongoose.model("Todo", TodosSchema)

mongoose.connect("mongodb://127.0.0.1:27017/todos").then(() => console.log("DB Connected!"))

app.use(express.json())

app.get("/api/todos", async function (req, res) {
    let todos = await Todo.find()
    res.send(todos)
})

app.post("/api/todos", async function (req, res) {
    try {
        if (!req.body.title) {
            return res.status(400).send({
                msg: "Bad request",
                error: {
                    title: "required field",
                },
            })
        }

        let newTodo = await Todo.create({
            title: req.body.title,
            status: false,
        })
        res.send(newTodo)
    } catch (err) {
        res.status(500).send("server error")
    }
})

app.put("/api/todos/:id", async function (req, res) {
    let error = {}
    let hasError = false

    if (!req.body.title) {
        error.title = "required"
        hasError = true
    }

    if (!req.body.status) {
        error.status = "required"
        hasError = true
    } else {
        if (typeof req.body.status !== "boolean") {
            error.status = "boolean required"
            hasError = true
        }
    }

    if (hasError) {
        res.status(400).send({
            msg: "Bad request",
            error,
        })
        return
    }

    try {
        let todo = await Todo.findByIdAndUpdate(req.params.id)
        if (!todo) {
            res.status(404).send("resources not found")
            return
        }

        await Todo.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            status: req.body.status,
        })
        res.send("data updated")
    } catch (err) {
        res.status(500).send("server error")
    }
})

app.delete("/api/todos/:id", async function (req, res) {
    try {
        let todo = await Todo.findByIdAndUpdate(req.params.id)
        if (!todo) {
            res.status(404).send("resources not found")
            return
        }

        await Todo.findByIdAndDelete(req.params.id)
        res.send("data deleted")
    } catch (err) {
        res.status(500).send("server error")
    }
})

app.listen(8000, () => {
    console.log("Server started")
})
