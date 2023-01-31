<template>
  <AppHeader />
  <RouterView :key="$route.path" />
  <footer class="px-10 text-base italic pb-4">
    <hr />
    <span class="inline-block pt-2">Created for ABN Amro assessment</span>
  </footer>
</template>
<script>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'App',
  components: {
    AppHeader,
    RouterView
  }
}
</script>