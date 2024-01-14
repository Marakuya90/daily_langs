<script setup lang="ts">

</script>
<template>
  <div class="main_layout">
    <div class="design_background">
      <img class="ellipse_design" src="/ellipse.svg" alt="ellipse">
      <img class="lines_design" src="/lines.svg" alt="ellipse">
      <img class="star_design" src="/star.svg" alt="ellipse">
      <div class="layout_container">
        <LayoutHeader></LayoutHeader>
        <slot/>
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

@media (max-width: 393px) {
  .main_layout {
    width: 21.833rem;
  }
  .ellipse_design, .lines_design {
    display: none;
  }
  .design_background{
    .layout_container {
      width: 20.278rem;
    }
  }
}

</style>