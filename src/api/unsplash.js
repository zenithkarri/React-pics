import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {Authorization: 'Client-ID dSDC7M_m98zrLwRM1qbrDtHZEfMtyxZT_g5U87LnedY'}
});