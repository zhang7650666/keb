<template>
  <svg class="svgClass">
      <use :xlink:href="iconName"></use>
   </svg>
</template>

<script>
export default {
    props: {
        iconClass: {
            type: String,
        }
    },
    computed: {
        iconName() {
            return '#icon-' + this.iconClass
        }
    }
}
</script>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>