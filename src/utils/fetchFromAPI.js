import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const options = {
    params: {
        maxResutls: '50'
    },
    headers: {
        'X-RapidAPI-Key': 'e46c5b126cmshfc8cc61bf98e29bp1ddd9ajsn640ed04f6a99',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    
    return data; 
}

export default fetchFromAPI