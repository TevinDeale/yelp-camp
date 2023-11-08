import logo from '../../Assets/Logo.svg';
import heroCampMobile from '../../Assets/Hero Image (Tablet and Mobile).jpg'

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
            <h1>Explore the best camps on Earth.</h1>
        </main>
    </>
    )
}

export default Landing