<script lang="ts" setup>
import { useRoute } from 'vue-router';
import usePokemon from '../composables/usePokemon';
import { useQueryClient } from '@tanstack/vue-query';

const route = useRoute()
const queryClient = useQueryClient()

const {id} = route.params

const {isLoading,pokemon,isError,error} = usePokemon(id.toString())

const onInvalidateQueries = () => {
    queryClient.invalidateQueries({ queryKey: ['pokemon',id] })
}
</script>

<template>
    <button @click="onInvalidateQueries">Invalidar Queries</button>
    <h1 v-if="isLoading">Cargando...</h1>
    <h1 v-else-if="isError">{{error}}</h1>
    <div v-else-if="pokemon">
        <h1>{{pokemon.name}}</h1>
        <div class="character-container">
            <img :src="pokemon.frontSprite" :alt="pokemon.name">
        </div>
    </div>
</template>

<style scoped>
.character-container{
    display: flex;
    flex-direction: row;
}
img{
    width: 150px;
    border-radius: 5px;
}
</style>


