import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const todomodel = {
    create: async (data) => {
        try{
            
            let newtodo = await prisma.todo.create({
                data
            })
            return newtodo;
        }catch (error){
            console.log(error);
        }
    },
    getall: async () => {
        try{
            let todos = await prisma.todo.findMany();
            return todos;
        }catch (error){
            console.log(error);
        }
    },
    delete: async (id) => {
        try {
            let todos = await prisma.todo.delete({
                    where: {
                        id: id
                    }
                });
            return todos;
        } catch (error) {
            console.log(error);
        }   
    },
    update: async (id, data) => {
        try {
            let todo = await prisma.todo.update({
                where:{
                    id: id
                },
                data
            })
            return todo;
        } catch (error) {
            console.log(error);
        }
    }
}
