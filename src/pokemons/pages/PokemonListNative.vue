<script lang="ts" setup>
import store from '@/store/pokemon.store';
import PokemonCardList from '../components/PokemonCardList.vue';
import { useQuery } from '@tanstack/vue-query';
import { getPokemons } from '../helpers/get-pokemons';

useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons,
    select(data) {
        store.loadedPokemons(data) 
    },
    retry: 0,
})

</script>

<template>
    <h3  v-if="store.pokemons.isLoading">CARGANDO</h3>
    <div v-else-if="store.pokemons.hasError">
        {{ store.pokemons.errorMessage }}
    </div>
    <template v-else>
        <h1>Pokemon List Native - {{ store.pokemons.count }}</h1>
        <PokemonCardList :pokemons="store.pokemons.list" />
    </template>
</template>


