import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import HomePage from './pages/HomePage';
import {useState} from 'react';
import {CgGym} from 'react-icons/cg';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <CgGym className="App-logo"/>
          <h1>Exercise Progression Tracker</h1>
          <p>Track exercises for better growth.</p>
        </header>
        <main>
          <Navigation/>
          <Route path="/" exact><HomePage setExerciseToEdit={setExerciseToEdit}/></Route>
          <Route path="/add-exercise"><CreatePage/></Route>
          <Route path="/edit-exercise"><EditPage exerciseToEdit={exerciseToEdit}/></Route>
        </main>
        <footer>
          <p>© 2022 Isaac Hernandez</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
