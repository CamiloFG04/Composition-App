<script lang="ts" setup>
import PokemonCardList from '../components/PokemonCardList.vue';
import usePokemons from '../composables/usePokemons';

const {isLoading,pokemons,count,isError,error} = usePokemons()

</script>

<template>
    <h3  v-if="isLoading">CARGANDO</h3>
    <div v-else-if="isError">
        {{ error }}
    </div>
    <template v-else>
        <h1>Pokemon List - {{ count }}</h1>
        <PokemonCardList :pokemons="pokemons ?? []" />
    </template>
</template>


