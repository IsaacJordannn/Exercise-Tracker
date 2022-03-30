import React from 'react';
import Row from './Row';

function Table({exercises, onDeleteExercise, onEditExercise}) {
    return (
        <table id="exercises">
            <caption>Exercises</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise, i) => <Row exercise={exercise} onDeleteExercise={onDeleteExercise} onEditExercise={onEditExercise} key={i}/>)}
            </tbody>
        </table>
    );
}

export default Table;