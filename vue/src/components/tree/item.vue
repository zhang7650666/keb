<template>
    <li>
        <div @click="toggle">
            <span v-if="isFolder">{{open ? '-' : '+'}}</span> <span>{{model.title}}</span>
        </div>
        <ul v-show="open" v-if="isFolder">
            <Item v-for="model in model.children" :key="model.title" :model="model"></Item>
        </ul>
    </li>
</template>
<script>

export default {
    name: 'Item',
    props: {
        model: {
            type: Object,
        }
    },
    data() {
        return {
            open: false
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
        }
    }
}
</script>