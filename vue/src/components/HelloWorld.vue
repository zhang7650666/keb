<template>
  <div class="hello" @click="$parent.$emit('abs', 'abc')">
    <h1>{{ msg }}</h1>
    {{foo}}
    <Test></Test>
    <h1>插槽相关内容</h1>
    <slot></slot>
    <div>
      <div>
        <slot name="header"></slot>
      </div>
    </div>
    <slot :foo="foo"></slot>
  </div>
</template>

<script>
import Test from '@/components/test.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      foo: 'foo'
    }
  },
  created () {
    this.$parent.$on('testEv', v => {
      console.log(1111, v)
    })
  },
  components: {
    Test
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
