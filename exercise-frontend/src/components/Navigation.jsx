import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <Link to="/" exact>Home</Link>
            <Link to="/add-exercise">Add Exercise</Link>
        </nav>
    );
}

export default Navigation;