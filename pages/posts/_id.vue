<template>
  <div class="mountain-detail">
      <div
        class="title"
        :style="`background: url(${post.image}) no-repeat center center`"
        :alt="`${post.title}`"
      >
        {{post.title}}
      </div>
      <span>Continent: {{post.continent}}</span>
      <span>Countries: {{post.countries.join('、')}}</span>
      <span>Height: {{post.height}}</span>
      <span>Updated Time: {{post.updatedAt | timeFormatDate}}</span>
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
.mountain-detail {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title {
    width: 600px;
    height: 400px;
    border-radius: 6%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
  }
}
</style>
