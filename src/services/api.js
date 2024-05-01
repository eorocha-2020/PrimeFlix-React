
//base da url https://api.themoviedb.org/3
//URL DA API https://api.themoviedb.org/3/movie/now_playing?api_key=4ef2040a59e2f8159a9ab5602daf6549
import axios from "axios";

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3'
})

export default api;