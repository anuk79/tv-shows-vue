<template>
  <section class="p-4 md:px-16 md:pt-10">

    <a v-if="show.externals?.imdb" 
      :href="`https://www.imdb.com/title/${show.externals.imdb}/`"
      target="_blank">
      <h2 class="text-3xl inline-block whitespace-nowrap font-bold">{{ show.name }}</h2>
    </a>
    <h2 v-else class="text-3xl whitespace-nowrap font-bold">{{ show.name }}</h2>
    <div>
      <span class="inline-block text-lg pb-3">{{ show.language }} </span>
      <span v-if="show.runtime" class="text-lg"> - {{ show.runtime }}m </span>
      <span class="text-lg">- {{ show.type }}</span>
    </div>
    <div v-if="show.genres?.length">
      <span class="inline-block m-1 px-3 pb-[2px] border-2 border-solid border-teal-700 rounded-2xl" v-for="genre in show.genres" :key="genre">{{ genre }}</span>
    </div>
    <section>
      <h3 class="text-2xl font-bold py-2 md:py-4">Summary</h3>
      <div class="text-lg pt-2" v-html="show.summary"></div>
    </section>
    <section v-if="show._embedded?.cast?.length">
      <h3 class="text-2xl font-bold py-2 md:py-4">Stars</h3>
      <ul class="w-full flex flex-row overflow-x-auto py-4 px-3">
        <li class="min-h-[260px] min-w-[190px] w-[190px] px-2"
          v-for="cast in show._embedded.cast" :key="cast.person.id">
          <img class="rounded-lg w-full" :src="cast.person?.image?.medium" :alt="cast.person.name" />
          <span class="text-lg pt-2 inline-block">{{ cast.person.name }}</span>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
export default {
  name: 'ShowDetails',
  props: {
    show: {
      type: Object,
      required: true,
    },
  },
};
</script>