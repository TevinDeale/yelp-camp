import logo from '../../Assets/Logo.svg';
import heroCampMobile from '../../Assets/Hero Image (Tablet and Mobile).jpg';
import airbnbLogo from '../../Assets/Airbnb.svg';
import bookingLogo from '../../Assets/Booking.svg';
import plumguideLogo from '../../Assets/Plum Guide.svg';
import heroCampDesktop from '../../Assets/Hero Image.jpg'
import './Landing.css';


const Landing = () => {
    return (
    <div className='landing-container'>
        <div className='left'>
            <header className='logo'>
                <img src={logo} alt='logo' />
            </header>

            <div className='hero-camp-mobile-container'>
                <img src={heroCampMobile} alt='Hero Camp' />
            </div>

            <main className='main-container'>
                <h1 id='motto'>Explore the best camps on Earth.</h1>
                <h4 id='description'>YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews.</h4>
                <ul className='actions-list'>
                    <li className='actions'><h4>Add your own camp suggestions.</h4></li>
                    <li className='actions'><h4>Leave reviews and experiences.</h4></li>
                    <li className='actions'><h4>See locations for all camps.</h4></li>
                </ul>
                <button className='view-campgrounds'>
                    View Campgrounds
                </button>
                
                <div className='partners'>
                <h4>Partnered with:</h4>
                    <ul>
                        <li><img src={airbnbLogo} alt='airbnb-logo' id='airbnb-logo' className='partner-logo' /></li>
                        <li><img src={bookingLogo} alt='booking-logo' id='booking-logo' className='partner-logo' /></li>
                        <li><img src={plumguideLogo} alt='plumguide-logo' id='plumguide-logo' className='partner-logo' /></li>
                    </ul>
                </div>
            </main>
        </div>

        <div className='hero-camp-desktop-container'>
            <img src={heroCampDesktop} alt='Hero Camp' />
        </div>
    </div>
    )
}

export default Landing