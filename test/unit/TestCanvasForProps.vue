<template>
  <div>
    <test-component-with-props
      :title="name"
      :count="total"
    />
  </div>
</template>

<script>
import TestComponentWithProps from './TestComponentWithProps'
export default {
  name: 'TestCanvasForProps',
  components: { TestComponentWithProps },
  filters: {
  },
  data () {
    return {
      name: 'Component 1',
      total: -1
    }
  },
  methods: {
  },
}
</script>
<style scoped>
</style>
