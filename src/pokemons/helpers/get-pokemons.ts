import axios from 'axios';
import pokemonsApi from '../api/pokemonApi';
import type { PokemonListResponse,Pokemon, PokemonResponse } from '../interfaces';
import { sleep } from './sleep';

export const getPokemons = async(): Promise<Pokemon[]> => {

    // throw new Error('Error al obtener los pokemons')
    await sleep(4)

    const {data} = await pokemonsApi.get<PokemonListResponse>('/pokemon?limit=45')
    const pokemonPromises: Promise<Pokemon>[] = []

    for (const {url} of data.results) {
        const pokemonPromise = axios.get<PokemonResponse>(url).then(({data}) => {
            return {
                id: data.id,
                name: data.name,
                frontSprite: data.sprites.front_default
            }
        })
        pokemonPromises.push(pokemonPromise)
    }

    const pokemons = await Promise.all(pokemonPromises)

    return pokemons

}

export const getPokemon = async(id: string): Promise<Pokemon> => {
    await sleep(2)

    const {data} = await pokemonsApi.get<PokemonResponse>(`/pokemon/${id}`)
    return {
        id: data.id,
        name: data.name,
        frontSprite: data.sprites.front_default
    }
}