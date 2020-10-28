<template>
    <li v-if="!model.hidden">
        <div @click="toggle">
            <Icon v-if="model.meta && model.meta.icon" :icon-class="model.meta.icon"></Icon>
            <span v-if="isFolder">
                <span v-if="model.meta && model.meta.title">{{model.meta.title}}</span>
                <span>{{open ? '-' : '+'}}</span>
            </span>
            <template v-else>
                <router-link v-if="model.meta && model.meta.title" :to="resolvePath(model.path)">{{model.meta.title}}</router-link>
            </template>
            
        </div>
        <ul v-show="open" v-if="isFolder">
            <item  v-for="route in model.children" :model="route" :key="route.path" :base-path="resolvePath(model.path)"></item>
        </ul>
    </li>
</template>

<script>
  import path from 'path'
  export default {
    name: 'item',
    props: {
      model: {
        type: Object,
        default: [],
      },
      basePath: {
          type: String,
      }
    },
    data(){
        return {
            open: false,
        }
    },
    computed: {
        isFolder() {
            return this.model.children && this.model.children.length;
        }
    },
    methods: {
        toggle() {
            if(this.isFolder) {
                this.open = !this.open;
            }  
        },
        resolvePath(routePath) {
            return path.resolve(this.basePath, routePath)
        }
    }
  }

</script>
<style lang="scss" scoped>
li{
    margin-left: 10px;
}

</style>
