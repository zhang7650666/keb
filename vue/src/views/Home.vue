<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" ref="hw" > 
      <template v-slot:default>
        匿名插槽
      </template>
      </HelloWorld>
    <HelloWorld msg="Welcome to Your Vue.js App" ref="hw" > 
      <template v-slot:header>
        具名插槽
      </template>
    </HelloWorld>

     <HelloWorld msg="Welcome to Your Vue.js App" ref="hw" > 
      <template v-slot:default="{ foo }">
        <p>{{foo}}</p>
      </template>
    </HelloWorld> -->

    <!-- <FromTest></FromTest>

    <Tree></Tree> -->
    <!-- <Icon iconClass="xx"></Icon> -->
    <!-- <svg>
      <use xlink:href="#icon-del"></use>
    </svg> -->
  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Test from '@/components/test.vue'
import FromTest from '@/components/form'
import Tree from '@/components/tree'
import Icon from '@/components/base/icon'
export default {
    name: 'Home',
    // provide: {
    //   provide: 'proviabcde'
    // },
    components: {
        // HelloWorld,
        // Test,
        FromTest,
        Tree,
        Icon
       
    },
    method: {
    },
    mounted () {
        // this.$refs.hw.foo = 'bar'
        // this.$children[0].foo = 'dong'
        // console.log('this', this)
    }
}
</script>
