<template>
  <div>
    <button v-tooltip.top-center="tip">Hover me</button>
    <!-- <h1>{{post.title}}</h1>
    <article v-for="post in posts" :key="post.id">
        <h4>{{post.title}}</h4>
    </article> -->
    <div>{{posts}}</div>
    <ul v-for="post in posts" :key="post.id">
        <li>
            <nuxt-link to="/sorry">😁</nuxt-link>
        </li>
    </ul>
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
</style>