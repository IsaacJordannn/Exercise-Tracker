import mongoose from 'mongoose';

mongoose.connect(
    "mongodb://localhost:27017/exercises",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: String, required: true }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

const createExercise = async (name, reps, weight, unit, date) => {
    const exercise = new Exercise ({name: name, reps: reps, weight: weight, unit: unit, date: date});
    return exercise.save();
}

const findExercises = async () => {
    const query = Exercise.find();
    return query.exec();
}

const updateExercise = async (id, name, reps, weight, unit, date) => {
    const result = await Exercise.replaceOne({_id: id}, {name: name, reps: reps, weight: weight, unit: unit, date: date});
    return result.modifiedCount;
}

const deleteExercise = async (id) => {
    const result = await Exercise.deleteOne({_id: id});
    return result.deletedCount;
}

export {createExercise, findExercises, updateExercise, deleteExercise}