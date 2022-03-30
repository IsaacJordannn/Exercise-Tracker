import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

export const CreatePage = () => {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const history = useHistory();

    const addExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        const response = await fetch('/exercises', {method: 'POST', body: JSON.stringify(newExercise), headers: {'Content-Type': 'application/json',},
        });
        if (response.status === 201) {
            alert("Successfully added the exercise.");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    }

    return (
        <div>
            <h2>Add an exercise to the tracker.</h2>
            <p>Enter the name of the exercise, amount of reps completed, the total weight, the units of measurement, and the date the exercise was performed.</p>
            <form>
                <fieldset>
                    <legend>Add a New Exercise:</legend>
                    <label for="idValue">Name: </label>
                        <input type="text" placeholder="Name of Exercise" value={name} onChange={e => setName(e.target.value)}/>
                    <label for="idValue">Reps: </label>
                        <input type="number" placeholder="# of Reps Completed" value={reps} onChange={e => setReps(e.target.value)}/>
                    <label for="idValue">Weight: </label>
                        <input type="number" placeholder="Total Amount of Weight" value={weight} onChange={e => setWeight(e.target.value)}/>
                    <label for="idValue">Unit: </label>
                        <select value={unit} onChange={e => setUnit(e.target.value)}>
                            <option value=""></option>
                            <option value="lbs">lbs</option>
                            <option value="kgs">kgs</option>
                        </select>
                    <label for="idValue">Date: </label>
                        <input type="text" placeholder="Exercise Date (MM-DD-YY)" value={date} onChange={e => setDate(e.target.value)}/>
                </fieldset>
            </form>
            <button onClick={addExercise}>Add</button>
        </div>
    );
}

export default CreatePage;