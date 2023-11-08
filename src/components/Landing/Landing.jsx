import logo from '../../Assets/Logo.svg';
import heroCampMobile from '../../Assets/Hero Image (Tablet and Mobile).jpg';
import airbnbLogo from '../../Assets/Airbnb.svg';
import bookingLogo from '../../Assets/Booking.svg';
import plumguideLogo from '../../Assets/Plum Guide.svg';
import checkmark from '../../Assets/Checkmark.svg';


const Landing = () => {
    return (
    <>
        <header className='logo'>
            <img src={logo} alt='logo' />
        </header>

        <div className='hero-camp-mobile-container'>
            <img src={heroCampMobile} alt='Hero Camp' />
        </div>

        <main className='main-container'>
            <h1 id='motto'>Explore the best camps on Earth.</h1>
            <h4 id='description'>YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews.</h4>
            <ul>
                <li><img src={checkmark} /><h4>Add your own camp suggestions.</h4></li>
                <li><img src={checkmark} /><h4>Leave reviews and experiences.</h4></li>
                <li><img src={checkmark} /><h4>See locations for all camps.</h4></li>
            </ul>
            <button className='view-campgrounds'>
                View Campgrounds
            </button>
            <h4>Partnered with:</h4>

            <div className='partners'>
                <ul>
                    <li><img src={airbnbLogo} alt='airbnb-logo' id='airbnb-logo' className='logo' /></li>
                    <li><img src={bookingLogo} alt='booking-logo' id='booking-logo' className='logo' /></li>
                    <li><img src={plumguideLogo} alt='plumguide-logo' id='plumguide-logo' className='logo' /></li>
                </ul>
            </div>

        </main>
    </>
    )
}

export default Landing