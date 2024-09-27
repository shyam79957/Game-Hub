import axios from 'axios';

 export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params: {
        key: 'f00490e4f02c48cb932135db46d9592e'
    } 
} )