import { Link } from 'react-router-dom';
import logo from '../../Assets/Logo.svg';

const Navbar = () => {
    return (
        <header className='logo'>
            <Link to='/'><img src={logo} alt='logo' /></Link>
        </header>
    )
}

export default Navbar;