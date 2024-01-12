<script setup lang="ts">

</script>

<template>
  <div class="layout_container">
    <LayoutHeader></LayoutHeader>
    <div class="container">
      <LayoutSidebar/>
      <slot/>
    </div>
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<style lang="scss">
.container {
  display: grid;
  grid-template-columns: 1fr 6fr;
  width: 1160px;
  margin: 0 auto;
}
</style>