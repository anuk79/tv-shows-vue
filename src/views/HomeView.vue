<template>
  <main>
    <LoaderComponent v-if="loading" />
    <BillboardItem v-bind:highlightedShow="randomShowToHighlight" showInfo />
    <ShowsList v-bind:showsByGenre="showsByGenre" v-bind:genres="genres" />
  </main>
</template>

<script>
import BillboardItem from '../components/BillboardItem.vue';
import ShowsList from '../components/ShowsList.vue';
import LoaderComponent from '../components/LoaderComponent.vue';
import { getShowsWithGenre, getRandomIndex } from '../utils';
import { toRaw } from 'vue';

export default {
  name: 'HomeView',
  components: {
    BillboardItem,
    ShowsList,
    LoaderComponent
  },
  data() {
    return {
      showsByGenre: [],
      genres: [],
      loading: true,
      error: false,
      randomShowToHighlight: {}
    }
  },
  methods: {
    async fetchShowDetails () {
      const showsList = await fetch('https://api.tvmaze.com/shows')
      .then((response) => response.json())
      .then((data) => {
        this.loading = false;
        this.error = false;
        return data;
      }).catch((error) => {
        this.loading = false;
        this.error = error;
        return [];
      });
     
      const dataWithGenre = toRaw(getShowsWithGenre(showsList));
      this.showsByGenre = dataWithGenre.showsByGenre;
      this.genres = dataWithGenre.genres;
      this.randomShowToHighlight = toRaw(showsList[getRandomIndex(showsList.length)]);
    }
  },
  created () {
    this.fetchShowDetails();
    document.title = `Watch shows -  ABN Prime`;
  },
};
</script>
