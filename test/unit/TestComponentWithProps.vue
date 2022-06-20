<template>
  <div
    class="miniwolf"
    @customEvent="blowup()"
  >
    <h1>{{ title }}</h1>
    <div>{{ count | assertInRange }}</div>
  </div>
</template>

<script>
export default {
  name: 'TestComponentWithProps',
  filters: {
    assertInRange: function (value) {
      if (value < 0) { throw Error('out of range') }
      return value
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: true
    }
  }
}
</script>
<style scoped>
</style>
