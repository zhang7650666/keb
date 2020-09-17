<template>
    <div style="margin: 20px 0px">
        <label v-if="label" style="margin-right: 5px;">{{label}}</label>
        <input :checked="checked" @change="onChange" v-bind="$attrs">
    </div>
</template>
<script>
export default {
    props: {
        checked: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            default: '',
        }
    },
    model: {
        prop: 'checked',
        event: 'change'
    },
    methods: {
        onChange(ev) {
            this.$emit('change', ev.target.checked)
        }
    }
}
</script>