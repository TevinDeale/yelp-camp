import { Link } from 'react-router-dom';
import logo from '../../Assets/Logo.svg';
import hamburger from '../../Assets/Hamburger Menu.svg'

const Navbar = () => {
    return (
        <header className='logo'>
            <Link to='/'><img src={logo} alt='logo' /></Link>
            <div className='hameburger-container'>
                <img src={hamburger} />
            </div>
        </header>
    )
}

export default Navbar;