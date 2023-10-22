<script lang="ts" setup>
import NavBar from '@/shared/components/NavBar.vue';
import { pokemonRoute } from '../router';
import type { RouterLink } from '@/router/list-routes';

const routeLinks: RouterLink[] = pokemonRoute.children?.map(({name,path,props}) => {

   

    return {
        name: name?.toString() ?? '',
        path,
        title: (props as {title: string}).title,
    }
}) || []



</script>

<template>
    <NavBar :links="routeLinks" is-secondary/>
    <RouterView />

</template>


