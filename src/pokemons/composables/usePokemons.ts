import { computed} from 'vue';
import { getPokemons } from '../helpers/get-pokemons';
import { useQuery } from '@tanstack/vue-query';



const usePokemons = () => {

    const {isLoading, data:pokemons, isError, error} = useQuery({
        queryKey: ['pokemons'],
        queryFn: getPokemons
    })
    const count = computed(() => pokemons.value?.length ?? 0)

    return {
        // Properties
        isLoading,
        pokemons,
        isError,
        error,

        // Computed
        count,
    }
}


export default usePokemons