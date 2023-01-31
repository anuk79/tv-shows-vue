<template>
  <div class="flex flex-col m-2">
    <div class="flex pb-1">
      <label class="sr-only" for="search-input">Search</label>
      <input
        id="search-input"
        type="search"
        class="w-full sm:min-w-[250px] rounded-md p-2 text-lg text-black mr-2"
        placeholder="Search for shows"
        aria-describedby="search-error"
        v-model="searchQuery"
        @keyup.enter="searchShow"
        ref="input"
      />
    </div>
    <div v-show="error" id="search-error" aria-live="polite" class="text-red-600">Show not found. Please try again.</div>
  </div>
</template>
<script>
export default {
  name: 'SearchInput',
  data() {
    return {
      searchQuery: '',
      error: false
    };
  },
  methods: {
    searchShow() {
      const searchQuery = this.$refs.input.value;
      fetch(`https://api.tvmaze.com/singlesearch/shows?q=${searchQuery}`)
        .then((response) => response.json())
        .then((response) => {
          this.$router.push({ name: 'show', params: { id: response.id } })
        })
        .catch(() => {
          this.error = true;
        });
      }
    }
};

</script>