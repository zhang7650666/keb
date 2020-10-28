<template>
  <div id="app">
    <!-- <breadcrumb></breadcrumb> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
    </div> -->
    <router-view/>
  </div>
</template>
<script>
import breadcrumb from '@/components/base/breadcrumb'
export default {
  components: {
    breadcrumb
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
*{
    margin: 0px;
    padding: 0px;
    text-align: left;
}
li{
    list-style: none;
}
</style>
