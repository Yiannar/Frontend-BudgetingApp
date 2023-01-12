import { Link } from 'react-router-dom' 
import header from '../Components/NavBar.css'


function NavBar() {
    return (
        <nav className='header'>
            <h1 className='title'>
                <Link to="/">Budgeting App</Link>
            </h1>
            <button className='button'> 
                <Link to="/transactions/new">New Transactions</Link>
            </button>
        </nav>
    );
}

export default NavBar;