import axios from 'axios';

// All of your API requests should be in this file
const API_KEY = "393cf5b38d4a5f8e7d1a4ceae325255c"
const BASE_URL = "https://api.themoviedb.org/3"

export const getMovies = async (keyword = "Harry", year = 2005) => {
    // event.preventDefault();

    // it's important to await for http get response
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}&year=${year}`)
        .then(res => {
            // console.log(res.data.results)
            return res.data.results
        })
    return response
}

