<template>
  <div class="miniwolf">
    <h1>{{ title }}</h1>
    <div>{{ assertInRange }}</div>
  </div>
</template>

<script>
export default {
  name: 'TestComponentWithProps',
  props: {
    title: String,
    count: Number
  },
  computed: {
    assertInRange: function () {
      if (this.count < 0) {
        throw Error('out of range')
      }
      return this.count
    }
  }
}
</script>
<style scoped>
</style>
