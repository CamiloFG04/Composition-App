<script lang="ts" setup>
import NavBar from '@/shared/components/NavBar.vue';
import { pokemonRoute } from '../router';
import type { RouterLink } from '@/router/list-routes';

const routeLinks: RouterLink[] = pokemonRoute.children?.map(({name,path,props}) => {

   const {title,visible} = props as {title: string, visible: boolean}

    return {
        name: name?.toString() ?? '',
        path,
        title,
        visible
    }
}) || []



</script>

<template>
    <NavBar :links="routeLinks" is-secondary/>
    <!-- <Suspense> -->
        <RouterView />
        <!-- <template #fallback>
            Cargando información
        </template>
    </Suspense> -->

</template>


