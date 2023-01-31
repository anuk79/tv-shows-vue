<template>
  <ul class="w-full flex flex-row overflow-x-auto py-4 px-3">
    <li class="min-h-[260px] min-w-[190px] w-[190px]"
      v-for="item in data" :key="item.id">
      <router-link :to="'/show/' + item.id" class="p-2 inline-block linkWithImage">
        <img class="rounded-lg w-full" :src="item.image?.medium" :alt="item.name" />
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'HorizontalList',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>