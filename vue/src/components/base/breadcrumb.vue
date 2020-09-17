<template>
  <div>
    <ul>
      <li v-for="(item, index) in breadList" :key="index">
        <router-link :to="item.path">{{item.meta.title}} <span>{{index == breadList.length -1 ? '': '/'}}</span></router-link>
      </li>
    </ul>
      <span > </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadList: [],
    } 
  },
  watch: {
    $route() {
      this.breadcrumb();
    }
  },
  methods: {
    breadcrumb() {
      this.breadList = this.$route.matched;
    }
  }
}
</script>

<style>

</style>