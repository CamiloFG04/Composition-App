import { useQuery } from "@tanstack/vue-query";
import { getPokemon } from "../helpers/get-pokemons";


const usePokemon = (id:string) =>{
        
    const {isLoading, data:pokemon, isError, error} = useQuery({
        queryKey: ['pokemon',id],
        queryFn: () => getPokemon(id)
    })

    return {
        isLoading,
        pokemon,
        isError,
        error,
    }
}

export default usePokemon;