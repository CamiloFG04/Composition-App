<script lang="ts" setup>
import type { RouterLink } from '@/router/list-routes';
import { computed } from 'vue';

    interface Props {
        title?: string
        links: RouterLink[]
        isSecondary?: boolean,
        
    }

    const props = withDefaults(defineProps<Props>(),{
        title: 'Composition App',
        isSecondary: false
    })

    // const links = toRef(props.links)
    const links = computed(() => props.links.filter(link => link.visible))

</script>

<template>
    <nav>
        <template v-if="!$props.isSecondary">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
            <span>{{ $props.title }}</span>
        </template>
        <RouterLink v-for="route in links" :key="route.name" :to="route.path">{{ route.title }}</RouterLink>
       
    </nav>
</template>

<style scoped>
nav {
    align-items: flex-start;
    display: flex;
    font-size: 12px;
    margin-top: 10px;
    text-align: center;
    widows: 100%;
}

img{
    margin-right: 5px;
}

span{
    margin-right: 10px;
}

a{
    margin-right: 5px;
}

nav a.router-link-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
