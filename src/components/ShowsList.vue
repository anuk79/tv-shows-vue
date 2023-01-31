<template>
  <section>
    <ul class="py-8">
      <li v-for="genre in genres" :key="genre">
        <h2 class="text-2xl whitespace-nowrap font-bold px-5">{{ genre }}</h2>
        <HorizontalList :data="showsByGenre[genre]" />
      </li>
    </ul>
  </section>
</template>

<script>
import HorizontalList from './HorizontalList.vue';
export default {
  name: 'ShowsList',
  components: {
    HorizontalList,
  },
  props: {
    showsByGenre: {
      type: Object,
      required: true,
    },
    genres: {
      type: Array,
      required: true,
    }
  },
};
</script>