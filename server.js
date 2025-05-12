import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';


const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors({
    origin: '*'
}));


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


/**CRUD Exercicios*/
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


/**CRUD Usuarios*/
app.get('/users', async (req, res) => {
    let users = [];

    if(req.query){
        users = await prisma.users.findMany({
            where: {
                name: req.query.name,
                lastname: req.query.lastname,
                email: req.query.email,
                password: req.query.password,
                dateOfBirth: req.query.dateOfBirth,
                height: req.query.height,
                weight: req.query.weight,
                series: req.query.series,
                repetitions: req.query.repetitions,
                photo: req.query.photo
            }
        });

    }else{
        users = await prisma.users.findMany()
    }

    res.status(200).json(users);
});

app.post('/users', async (req, res) => {
    await prisma.users.create({
        data: {
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            dateOfBirth: new Date(req.body.dateOfBirth),
            sex: req.body.sex,
            height: req.body.height,
            weight: req.body.weight,
            series: req.body.series,
            repetitions: req.body.repetitions,
            photo: req.body.photo
        }
    });

    res.status(201).json(req.body);
});

app.put('/users/:id', async (req, res) => {
    await prisma.users.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            dateOfBirth: req.body.dateOfBirth,
            sex: req.body.sex,
            height: req.body.height,
            weight: req.body.weight,
            series: req.body.series,
            repetitions: req.body.repetitions,
            photo: req.body.photo
        }
    });

    res.status(201).json(req.body);
});

app.delete('/users/:id', async (req, res) => {
    await prisma.users.delete({
        where: {
            id: req.params.id
        }
    });

    res.status(204).json({message: 'Exercise deleted successfully'});
});