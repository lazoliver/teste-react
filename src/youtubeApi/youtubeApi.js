import axios from "axios";

const API_KEY = 'AIzaSyAr3_ZdxjzoBPBTEh4H5CoemS4UoQDBq08';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 6,
        key: API_KEY
    }
})