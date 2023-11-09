import { Link } from 'react-router-dom';
import logo from '../../Assets/Logo.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <Link to='/'><img src={logo} alt='logo' /></Link>
        </footer>
    )
}

export default Footer;