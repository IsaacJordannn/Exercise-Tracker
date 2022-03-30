import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

export const EditPage = ({exerciseToEdit}) => {
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const history = useHistory();

    const editExercise = async () => {
        const editedExercise = {name, reps, weight, unit, date};
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {method: 'PUT', body: JSON.stringify(editedExercise), headers: {'Content-Type': 'application/json',},
        });
        if (response.status === 200) {
            alert("Successfully edited the exercise.");
        } else {
            alert(`Failed to edit exercise, status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <div>
            <h2>Edit exercise within your routine.</h2>
            <p>Enter the name of the exercise, amount of reps completed, the total weight, the units of measurement, and the date the exercise was performed.</p>
            <form>
                <fieldset>
                    <legend>Edit exercise:</legend>
                    <label for="idValue">Name: </label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                    <label for="idValue">Reps: </label>
                        <input type="number" value={reps} onChange={e => setReps(e.target.value)}/>
                    <label for="idValue">Weight: </label>
                        <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
                    <label for="idValue">Unit: </label>
                        <select value={unit} onChange={e => setUnit(e.target.value)}>
                            <option value="lbs">lbs</option>
                            <option value="kgs">kgs</option>
                        </select>
                    <label for="idValue">Date: </label>
                        <input type="text" value={date} onChange={e => setDate(e.target.value)}/>
                </fieldset>
            </form>
            <button onClick={editExercise}>Save</button>
        </div>
    );
}

export default EditPage;