<template>
    <div class="mask-wrap">
      <div class="mask-mask"></div>
      <slot></slot>
  </div>
</template>
<style>
.mask-wrap {
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    z-index: 100;
    text-align: center;
  }
  .mask-mask{
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    z-index: 101;
    background: rgba(0, 0, 0, 0.5);
  }
</style>