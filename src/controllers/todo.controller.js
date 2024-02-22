import { todomodel } from "../models/todo.model.js";
export const todocontroller = {
    create: async (req, res) => {
        try {
            let data = req.body;
            let newTodo = await todomodel.create(data);
            res.status(200).json(newTodo)
        } catch (error) {
            
        }

    },
    getall: async (req, res) => {
        try {
            let todos = await todomodel.getall();
            res.status(200).json(todos)
        }catch(error){
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {
            let todos = await todomodel.delete(Number(req.params.id));
            res.status(200).json(todos)
        }catch(error) {
            console.log(error);
        }
    },
    update: async (req, res) => {
        try {
            let todo = await todomodel.update(Number(req.params.id), req.body);
            res.status(200).json(todo)
        } catch (error) {
            console.log(error);
        }
    }

}