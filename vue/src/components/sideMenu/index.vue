<template>
  <div>
      <ul>
        <item v-for="route in menuList" :key="route.path" :base-path="route.path" :model="route"></item>
      </ul>
  </div>
</template>

<script>
  import item from './item'
  import {mapState} from 'Vuex'
  export default {
    name: 'SideMenu',
    components: {
      item,
    },
    data() {
      return {
        // "menuList": [{
        //     "path": "1", //菜单项所对应的路由路径
        //     "title": "功能1", //菜单项名称
        //     "children": [] //是否有子菜单，若没有，则为[]
        //   },
        //   {
        //     "path": "2",
        //     "title": "功能2",
        //     "children": []
        //   },
        //   {
        //     "path": "3",
        //     "title": "功能3",
        //     "children": [{
        //         "path": "3-1",
        //         "title": "功能3-1",
        //         "children": []
        //       },
        //       {
        //         "path": "3-2",
        //         "title": "功能3-2",
        //         "children": [{
        //           "path": "3-2-1",
        //           "title": "功能3-2-1",
        //           "children": []
        //         }]
        //       },
        //       {
        //         "path": "3-3",
        //         "title": "功能3-3",
        //         "children": []
        //       },
        //     ]
        //   },
        //   {
        //     "path": "4",
        //     "title": "功能4",
        //     "children": [{
        //       "path": "4-1",
        //       "title": "功能4-1"
        //     }]
        //   }

        // ]

      }
    },
    computed: {
      menuList() {
        return this.$store.state.permission.routes;
      }
    }
  }

</script>

<style lang="scss" scoped>

li{
    margin-left: 0px;
}

</style>

