import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
   /* http://www.omdbapi.com/?i=tt3896198&apikey=e7f29f2c*/
};
const key = 'e7f29f2c';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        const query = `/?apikey=${key}&s=${title}`
       return  axiosInstance.get(query)
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
