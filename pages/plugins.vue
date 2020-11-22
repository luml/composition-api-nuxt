<template>
  <div>
    <button v-tooltip.top-center="tip">Hover me</button>
    <div class="grid-container">
        <article v-for="post in posts" :key="post.id">
            <h4>{{post.title}}</h4>
            <img :src="post.image" alt="photo" width="300" height="200">
            <nuxt-link :to="`${post.path}`">😁</nuxt-link>
        </article>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            tip: 'I am a useless plugin ?',
        }
    },
    async asyncData({ $axios }) {
        const posts = await $axios.$get(`https://api.nuxtjs.dev/posts`);
        return { posts };
    }
};
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 10px 10px;
  grid-template-areas:
    ". . . ."
    ". . . ."
    ". . . ."
    ". . . .";
}
</style>