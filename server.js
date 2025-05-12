import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


app.get('/exercicios', async (req, res) => {
    let exercicios = [];

    if(req.query){
        exercicios = await prisma.exercicios.findMany({
            where: {
                name: req.query.name,
                type: req.query.type,
                initialPosition: req.query.initialPosition,
                execution: req.query.execution,
                image: req.query.image
            }
        });

    }else{
        exercicios = await prisma.exercicios.findMany()
    }

    res.status(200).json(exercicios);
});

app.post('/exercicios', async (req, res) => {
    await prisma.exercicios.create({
        data: {
            name: req.body.name,
            type: req.body.type,
            initialPosition: req.body.initialPosition,
            execution: req.body.execution,
            image: req.body.image
        }
    });

    res.status(201).json(req.body);
});

app.put('/exercicios/:id', async (req, res) => {
    await prisma.exercicios.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            type: req.body.type,
            initialPosition: req.body.initialPosition,
            execution: req.body.execution,
            image: req.body.image
        }
    });

    res.status(201).json(req.body);
});

app.delete('/exercicios/:id', async (req, res) => {
    await prisma.exercicios.delete({
        where: {
            id: req.params.id
        }
    });

    res.status(204).json({message: 'Exercise deleted successfully'});
});


