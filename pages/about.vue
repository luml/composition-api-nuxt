<template>
  <div>
    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'about'
    const page = await $content(slug)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" })
      })

    return { page }
  }
}
</script>

<style lang="scss" scoped>
.nuxt-content-container {
  display: flex;
  justify-content: center;
}
</style>
