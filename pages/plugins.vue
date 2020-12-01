<template>
  <div class="container">
    <div class="grid-container">
        <article v-for="post in posts" :key="post.id">
            <h4>{{post.title}}</h4>
            <img
              @click="mountainDetail(post.path)"
              :src="post.image"
              :alt="post.title"
              width="300"
              height="200">
            <nuxt-link :to="`${post.path}`">⛰️</nuxt-link>
        </article>
    </div>
  </div>
</template>

<script>
export default {
    async asyncData({ $axios }) {
        const posts = await $axios.$get(`https://api.nuxtjs.dev/posts`);
        return { posts };
    },
    methods: {
      mountainDetail(path) {
        this.$router.push(`${path}`)
      }
    }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  .grid-container {
    width: 900px;
    margin: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 10px 10px;
    grid-template-areas:
      ". . ."
      ". . ."
      ". . ."
      ". . .";

      article {
        display: flex;
        flex-direction: column;

        img {
          cursor: pointer;

          &:hover {
            filter: contrast(1.75);
          }
        }
      }
  }
}

</style>
