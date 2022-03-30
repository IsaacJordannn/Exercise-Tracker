import React from 'react';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Table from '../components/Table';

function HomePage({setExerciseToEdit}) {
    const [exercises, setExercises] = useState([]);
    const history = useHistory();

    const onDeleteExercise = async _id => {
        const response = await fetch(`/exercises/${_id}`, {method: 'DELETE'});
        if (response.status === 204) {
            setExercises(exercises.filter(m => m._id !== _id));
        } else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`);
        }
    };

    const onEditExercise = exercise => {
        setExerciseToEdit(exercise);
        history.push("/edit-exercise");
    }

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    }

    useEffect(() => {
        loadExercises();
    }, []);

    return (
        <>
            <h2>Your current exercise details are below.</h2>
            <p>View your previous exercises below, edit or delete previous exercises, or add an exercise using either the button above, or below.</p>
            <Table exercises={exercises} onDeleteExercise={onDeleteExercise} onEditExercise={onEditExercise}/>
            <Link to="/add-exercise">Add an Exercise.</Link>
        </>
    );
}

export default HomePage;