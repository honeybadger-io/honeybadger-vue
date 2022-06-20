<template>
  <div
    class="miniwolf"
    @customEvent="blowup()"
  >
    <h1>{{ msg }}</h1>
    <button
      id="componentErrantButton"
      @click="makeSomethingUnrenderable()"
    >
      Trigger a component Error
    </button>
    <button
      id="setValueButton"
      @click="setSomethingValue(100)"
    >
      Set a value (no error)
    </button>
    <div>{{ something | formatSomething }}</div>
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  filters: {
    formatSomething: function (value) {
      if (value === 'unrenderable') {
        throw new Error('Something is Unrenderable')
      }
      if (!parseInt(value)) { return '<Empty>' }
      return `${value}`
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      something: 50
    }
  },
  methods: {
    blowup: () => {
      throw new Error('an error')
    },
    makeSomethingUnrenderable: function () {
      this.something = 'unrenderable'
      console.log(this.something)
    },
    setSomethingValue: function (value) {
      this.something = value
      console.log(this.something)
    }
  }
}
</script>
<style scoped>
</style>
