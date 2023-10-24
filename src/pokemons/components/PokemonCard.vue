<script lang="ts" setup>
import { useRouter } from 'vue-router';
import type { Pokemon } from '../interfaces/pokemon';
import { useQueryClient } from '@tanstack/vue-query';
import { getPokemon } from '../helpers/get-pokemons';

interface Props {
    pokemon: Pokemon
}

const props =  defineProps<Props>()
const router = useRouter()
const queryClient = useQueryClient()

const goTo = (id:number) => {
    router.push({name:'pokemon-id',params:{id}})
}

const prefetchPokemon = async () => {
    const id = props.pokemon.id.toString()
    await queryClient.prefetchQuery({
    queryKey: ['pokemon',id],
    queryFn: () => getPokemon(id),
  })
}

</script>

<template>
    <div class="pokemon-card" @click="goTo(pokemon.id)" @mouseenter="prefetchPokemon">
        <h3>{{ pokemon.name }}</h3>
        <img :src="pokemon.frontSprite" :alt="pokemon.name">
    </div>
</template>

<style  scoped>
    .pokemon-card{
        margin-right: 5px;
        margin-left: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;
        cursor: pointer;
    }

    h3{
        padding-bottom: 5px;
    }

    img{
        width: 150px;
        border-radius: 5px 5px 0px 0px;
        box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.1);
        transition: all 0.5s;
    }

    img:hover{
        box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.5);
        transition: all 0.5s;
    }
</style>
