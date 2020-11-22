<template>
  <div>
      <span>Continent: {{post.continent}}</span>
      <span>Countries: {{post.countries.join('、')}}</span>
      <span>Height: {{post.height}}</span>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, route }) {
    const post = await $axios.$get(`https://api.nuxtjs.dev/posts/${route.params.id}`);
    return { post };
  }
};
</script>

<style lang="scss" scoped>

</style>