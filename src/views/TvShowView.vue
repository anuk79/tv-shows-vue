<template>
    <LoaderComponent v-if="loading" />
    <BillboardItem v-bind:highlightedShow="show" />
    <ShowDetails v-bind:show="show" />
</template>

<script>
import BillboardItem from '../components/BillboardItem.vue';
import ShowDetails from '../components/ShowDetails.vue';
import LoaderComponent from '../components/LoaderComponent.vue';
import { toRaw } from 'vue';
import { useRoute } from "vue-router";

export default {
  name: 'TvShowView',
  components: {
    BillboardItem,
    ShowDetails,
    LoaderComponent
  },
  data() {
    return {
      show: [],
      loading: true,
      error: false,
    }
  },
  methods: {
    async fetchShowDetails () {
      const { params } = useRoute();
      const showsList = await fetch(`https://api.tvmaze.com/shows/${+params.id}?embed=cast`)
      .then((response) => response.json())
      .then((data) => {
        this.loading = false;
        this.error = false;
        return data;
      }).catch((error) => {
        this.loading = false;
        this.error = error;
        return {};
      });
     
      this.show = toRaw(showsList);
    }
  },
  created () {
    this.fetchShowDetails();
  },
}
</script>