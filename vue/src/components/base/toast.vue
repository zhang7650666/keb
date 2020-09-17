<template>
  <smask>
      <div class="t-main">
        <p class="t-msg">{{message}}</p>
      </div>
  </smask>
</template>
<script>
  import smask from './mask';
  export default {
    props: {
      title: {
        type: String,
        default: '',
      },
      message: {
        type: String,
        default: true,
      },
      duration: {
        type: Number,
        default: 2000,
      }
    },
    components: {
      smask
    }

  }

</script>
<style>
  .t-main{
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 102;
    transform: translate(-50%, -50%);
    background: #000;
    border-radius: 5px;
  }
  .t-msg {
    font-size: 12px;
    color: #fff;
    line-height: 1.2;
    padding: 0px 20px;
  }

</style>
