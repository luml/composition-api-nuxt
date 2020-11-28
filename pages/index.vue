<template>
  <main>
    <h2>LET US COUNT:</h2>
    <h1>{{ count }}</h1>
    <h4>{{ new Date() | timeFormat }}</h4>
    <button @click="addToCount">Increase Count</button>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const count = ref(0)

    function addToCount() {
      count.value ++
    }

    watchEffect(() => {
      console.log(count.value)
    })

    return {
      count,
      addToCount,
    }
  }
})
</script>

<style lang="scss" scoped>
h2 {
  color: saddlebrown
}
</style>
