import axios from "axios";


const pokemonsApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

export default pokemonsApi