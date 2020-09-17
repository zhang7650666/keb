<template>
    <div>
        <input :value="value" @input="onInput" v-bind="$attrs">
    </div>
</template>

<script>
export default {
    name: 'kInput',
    inheritAttrs: false, // 避免顶层容器继承属性
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    methods: {
        onInput (e) {
            this.$emit('input', e.target.value);
            // this.$parent.$emit('validate');
            // this.$boardcast('validate')
            this.$dispatch('validate')
        }
    }
}
</script>

<style lang="scss">

</style>