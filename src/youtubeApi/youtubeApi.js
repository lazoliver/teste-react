import axios from "axios";

const API_KEY = 'AIzaSyCbNyxK1VF5UIdZT4mMKDPQSxnlK2D7604';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        key: API_KEY
    }
})