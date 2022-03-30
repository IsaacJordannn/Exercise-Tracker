import * as exercises from './exercise-model.mjs';
import express from 'express';

const PORT = 3000;

const app = express();

app.use(express.json());

app.post('/exercises', (req, res) => {
    exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
    .then(exercise => {
        res.status(201).json(exercise);
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({Error: "Request failed."});
    });
});

app.get('/exercises', (req, res) => {
    exercises.findExercises()
    .then(exercise => {
        res.status(200).json(exercise);
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({Error: "Request failed."});
    })
});

app.put('/exercises/:id', (req, res) => {
    exercises.updateExercise(req.params.id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
    .then(numUpdated => {
        if (numUpdated === 1) {
            res.status(200).json({id: req.params.id, name: req.body.name, reps: req.body.reps, weight: req.body.weight, unit: req.body.unit, date: req.body.date});
        } else {
            res.status(404).json({Error: "Resource not found."});
        }
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({Error: "Request failed."});
    });
});

app.delete('/exercises/:id', (req, res) => {
    exercises.deleteExercise(req.params.id)
    .then(numDeleted => {
        if (numDeleted === 1) {
            res.status(204).send();
        } else {
            res.status(404).json({Error: "Resource not found."});
        }
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({Error: "Request failed."})
    })
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});