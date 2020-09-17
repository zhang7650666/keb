<template>
  <div>
      <p>list</p>
       <span>{{$kstore.state.count}}</span>
       <button @click="addComit">add</button>
      <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  created() {
  },
  methods: {
    addComit() {
      this.$kstore.commit('add')
    }
  }

}
</script>

<style>

</style>