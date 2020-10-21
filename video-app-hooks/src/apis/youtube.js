import axios from 'axios';

const KEY = 'AIzaSyDIEYCzTYXwnoYKRHHzhto7kx2SD3RK2xk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});