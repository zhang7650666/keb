<template>
  <div class="hello" @click="$parent.$emit('testEv', 'test')">
    <h1>{{ msg }}</h1>
   {{provide}}
  </div>
</template>

<script>
export default {
  name: 'Test',
  inject: {
    provide: {
      type: String
    }
  },
  props: {
    msg: String
  },
  data () {
    return {
      foo: 'foo'
    }
  },
  created () {
    this.$parent.$on('abs', v => {
      console.log('testEv', v)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
