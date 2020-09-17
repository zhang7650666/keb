<template>
  <div>
    <KForm :model="model" :rules="rules" ref="loginForm">
      <KFormItem label="用户名" prop="username">
        <KInput v-model="model.username"></KInput>
      </KFormItem>
      <KFormItem label="密码" prop="password">
        <KInput v-model="model.password" type="password"></KInput>
      </KFormItem>
      <KFormItem>
        <KCheckBox v-model="model.remember" label="复选框" type="checkBox"></KCheckBox>
        <KCheckBox :checked="model.remember" @change="model.remember = $event" label="复选框" type="checkBox"></KCheckBox>
      </KFormItem>
    <KFormItem >
       <button @click="login">登录</button>
      </KFormItem>
    </KForm>
   
  </div>
</template>

<script>
  import KInput from './kInput'
  import KFormItem from './kFormItem'
  import KForm from './kForm'
  import KCheckBox from './KCheckBox'

  export default {
    name: 'index',
    components: {
      KInput,
      KFormItem,
      KForm,
      KCheckBox
    },
    data() {
      return {
        model: {
          username: 'Hadwin',
          password: ''
        },
        rules: {
          username: [{
            required: true,
            message: '用户名必填'
          }],
          password: [{
            required: true,
            message: '密码必填'
          }]
        }
      }
    },
    mounted() {
      this.$toast({
        title: '标题',
        message: '提示信息'
      })
    },
    methods: {
        login() {
          this.$refs.loginForm.validate(isValidate => {
            if(isValidate) {
              console.log('校验成功')
            } else {
              console.log('校验失败')
            }
          })
        }
    }
  }

</script>

<style lang="scss">

</style>
