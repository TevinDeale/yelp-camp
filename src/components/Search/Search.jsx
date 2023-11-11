import "./Search.css";
import Navbar from "../Static/Navbar";
import Footer from "../Static/Footer";
import compressedImages from "../Static/campsites";
import { useEffect, useState } from "react";

const Card = (props) => {

    return (
        <div className="card-container">
            <div className="card-contents">
                <img src={props.img} alt='onay-beach' />
                <h3>{props.name}</h3>
                <h4>{props.desciption}</h4>
                <div className="button-container">
                    <button>View Campground</button>
                </div>
            </div>
        </div>
    )
    }


const Search = () => {

    const [camps, setCamps] = useState(compressedImages);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        console.log(searchTerm);
        if (searchTerm) {
            setCamps(compressedImages.filter(camp => camp.name.toLowerCase().includes(searchTerm.toLowerCase())));
        } else {
            setCamps(compressedImages);
        }
    }



    return (
    <div className="search-page-container">
        <Navbar />

        <main className="search-main-container">
            <h1>Welcome to YelpCamp!</h1>
            <h4>View our hand-picked campgrounds from all over the world, or add your own.</h4>
            <form onSubmit={(e) => e.preventDefault()}>
                <input onChange={(e) => {setSearchTerm(e.target.value)}} type="text" placeholder="Search for camps"></input>
                
                <br />
                <button onClick={handleSearch}>Search</button>
                <h4 id='add-campground'>Or add your own campground</h4>
            </form>
        </main>
        <div className="search-container-no-camps">
            {
                camps.length === 0 ? <h4 id='no-camps'>There no camps that match your search.</h4> : <div className="search-container">
                {camps.map((camp) => {
                    return (
                    <Card name={camp.name} desciption={camp.desciption} img={camp.img}/>
                    )
                })} </div>
                
            }
        </div>

        <Footer />
    </div>
    )
}

export default Search