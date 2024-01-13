<script setup lang="ts">

</script>

<template>
  <div class="design_background">
    <img class="ellipse_design background_design" src="/ellipse.svg" alt="ellipse">
    <img class="lines_design background_design" src="/lines.svg" alt="ellipse">
    <img class="star_design background_design" src="/star.svg" alt="ellipse">
    <div class="layout_container">
      <LayoutHeader></LayoutHeader>
      <div class="container">
        <LayoutSidebar/>
        <slot/>
      </div>
    </div>
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<style lang="scss">
.design_background {
  position: relative;
  overflow: hidden;
  .background_design {
    position: absolute;
  }
  .ellipse_design {
    right: -3.056rem;
    top: 11.333rem;
  }
  .lines_design {
    bottom: 16.389rem;
    left: 4rem;
  }
  .star_design {
    bottom: 19.444rem;
    right: 3.444rem;
  }
  .layout_container {
    width: 64.444rem;
    margin: 0 auto;
  }
}
.container {
  display: grid;
  grid-template-columns: 1fr 2.87fr;

}
</style>