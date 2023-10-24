import { computed, watchEffect} from 'vue';
import { getPokemons } from '../helpers/get-pokemons';
import { useQuery } from '@tanstack/vue-query';
import { initialPokemons } from '../data/initial-pokemons';



const usePokemons = () => {

    const {isLoading, data:pokemons, isError, error} = useQuery({
        queryKey: ['pokemons'],
        queryFn: getPokemons,
        initialData: initialPokemons
    })
    const count = computed(() => pokemons.value?.length ?? 0)

    
        watchEffect(()=>{
            // console.log('isError', isError.value);
        })

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