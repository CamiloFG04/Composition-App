import { computed, onMounted, ref } from 'vue';
import type { Pokemon } from '../interfaces/pokemon';
import { getPokemons } from '../helpers/get-pokemons';

const pokemons = ref<Pokemon[]>([])
const isLoading = ref(true)

const usePokemons = () => {

    onMounted(async() => {
        await loadPokemons()
    })

    const loadPokemons = async () => {
        pokemons.value = await getPokemons()
        isLoading.value = false
    }
    

    return {
        isLoading,
        pokemons,

        count: computed(() => pokemons.value.length)
    }
}


export default usePokemons