<script setup lang="ts">

</script>
<!--убрать sidebar поставить по дефолту страницу с курсами-->
<template>
  <div class="main_layout">
  <div class="design_background">
    <img class="ellipse_design" src="/ellipse.svg" alt="ellipse">
    <img class="lines_design" src="/lines.svg" alt="ellipse">
    <img class="star_design" src="/star.svg" alt="ellipse">
      <div class="layout_container">
        <LayoutHeader></LayoutHeader>
        <div class="container_grid">
          <LayoutSidebar/>
          <slot/>
        </div>
      </div>
      <LayoutFooter></LayoutFooter>
    </div>
  </div>
</template>

<style lang="scss">
.main_layout {
  width: 1400px;
  margin: 0 auto;
}

.design_background {
  position: relative;
  overflow: hidden;

  .ellipse_design {
    position: absolute;
    right: -5.056rem;
    top: 11.333rem;
  }

  .lines_design {
    position: absolute;
    bottom: 16.489rem;
    left: 2.1rem;
  }

  .star_design {
    position: absolute;
    right: 26px;
    bottom: 343px;
  }

  .layout_container {
    width: 64.444rem;
    margin: 0 auto;
  }
}

.container_grid {
  display: grid;
  grid-template-columns: 1fr 2.87fr;
}
</style>