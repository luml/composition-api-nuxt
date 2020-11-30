<template>
  <div class="mountain-detail">
      <div
        class="title"
        :style="`background: url(${post.image}) no-repeat center center`"
        :alt="`${post.title}`"
      >
        {{post.title}}
      </div>
      <section>
        <span>Continent: {{post.continent}}</span>
        <span>Countries: {{post.countries.join('、')}}</span>
        <span>Height: {{post.height}}</span>
        <span>Updated Time: {{post.updatedAt | timeFormatDate}}</span>
      </section>
      <article>
        <h1>{{ article.title }}</h1>
        <nuxt-content :document="article" />
      </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, route, $content }) {
    const post = await $axios.$get(`https://api.nuxtjs.dev/posts/${route.params.id}`);
    const article = await $content('home').fetch()
    console.log(111, article)
    return { post, article };
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

  section {
    margin: -100px -100px -100px 550px;
    border-radius: 10%;
    background: beige;
    width: 300px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  article {
    margin-top: 100px;
  }
}
</style>
