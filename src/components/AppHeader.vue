<template>
  <header class="block sm:flex items-center justify-between p-2">
    <h1>
      <router-link to="/" class="text-3xl text-center sm:text-left sm:text-4xl font-bold">ABN Prime
      </router-link>
    </h1>
    <SearchInput />
  </header>
</template>

<script>
import SearchInput from './SearchInput.vue';
export default {
  name: 'AppHeader',
  components: {
    SearchInput,
  }
}
</script>