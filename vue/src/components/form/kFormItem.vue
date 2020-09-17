<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <p v-if="errMsg">{{errMsg}}</p>
    </div>
</template>

<script>
import Schema from 'async-validator'
export default {
    inject: ['form'],
    props: {
        label: {
            type: String,
            default: ''
        },
        prop: {
            type: String
        }
    },
    data () {
        return {
            errMsg: ''
        }
    },
    mounted () {
        this.$on('validate', () => {this.validate()} )
    },
    methods: {
        validate () {
            const rules = this.form.rules[this.prop];
            const value = this.form.model[this.prop];
            // 执行校验
            const desc = {
                [this.prop]: rules
            }
            const schema = new Schema(desc);
            // 接收两个参数，参数一是要校验的值（键值对）  参数二是异常回调
            // 返回的是promise
            return schema.validate({ [this.prop]: value }, err => {
                if (err) {
                    // 有错误
                    this.errMsg = err[0].message;
                } else {
                    // 没有错误清楚错误信息
                    this.errMsg = '';
                }
            })
        }
    }
}
</script>

<style lang="scss">

</style>