<template>
  <div class="app-wrapper">
    <div>布局</div>
    <div class="layout-wrap">
      <sidebar class="sidebar-container" />
      <div class="main-container">
        <router-view />
      </div>
    </div>

  </div>
</template>
<script>
  import sidebar from '@/components/sideMenu'
  export default {
    name: 'layout',
    components: {
      sidebar
    }

  }

</script>
<style lang="scss" scoped>
  .app-wrapper {
    .layout-wrap{
      display: flex;
      .sidebar-container{
        width: 100px;
      }
    }
  }

</style>
