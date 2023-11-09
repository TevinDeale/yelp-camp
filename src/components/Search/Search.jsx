import "./Search.css";
import onay from '../../Assets/Camp Images/Compressed Images/Onay Beach.jpg';
import Navbar from "../Static/Navbar";

const campsites = {
    image: onay,
    Name: "Onay Beach",
    Description: "This is one of the best beach camping sites, beautiful and pristine."
}

const Card = () => {
    return (
        <div className="card-container">
            <div className="card-contents">
                <img src={onay} alt='onay-beach' />
                <h3>{campsites.Name}</h3>
                <h4>{campsites.Description}</h4>
                <div className="button-container">
                    <button>View Campground</button>
                </div>
            </div>
        </div>
    )
    }

const Search = () => {
    return (
    <>
        <Navbar />

        <main className="search-main-container">
            <h1>Welcome to YelpCamp!</h1>
            <h4>View our hand-picked campgrounds from all over the world, or add your own.</h4>
            <form>
                <input type="text" placeholder="Search for camps"></input>
                <button>Search</button>
                <h4>Or add your own campground</h4>
            </form>
        </main>
        <div className="search-container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </>
    )
}

export default Search