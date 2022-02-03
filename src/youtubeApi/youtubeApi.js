import axios from "axios";

const API_KEY = 'AIzaSyBE8fX-ez83MKLrAoAA3jsDE3XOQ4OFL-Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 6,
        key: API_KEY
    }
})