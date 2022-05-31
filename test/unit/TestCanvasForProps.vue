<template>
  <div>
    <test-component-with-props ref="test-comp-with-props" v-bind:title="name" v-bind:count="total"></test-component-with-props>
  </div>
</template>

<script>
import TestComponentWithProps from './TestComponentWithProps'
export default {
  name: 'TestCanvasForProps',
  components: { TestComponentWithProps },
  data () {
    return {
      name: 'Component 1',
      total: 10
    }
  },
  methods: {
  }
}
</script>
<style scoped>
</style>
