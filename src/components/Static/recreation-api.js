import axios from "axios";

const getCampsite = () => {
    try { 
        const response = axios.get('https://ridb.recreation.gov/api/v1/campsites?query=round%20rock&limit=50&offset=0')
        const data = response;
        console.log(data.data);
    } catch (error) {
        console.log(error);
    }
}

getCampsite();