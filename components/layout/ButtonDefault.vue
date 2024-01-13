<script setup lang="ts">

</script>

<template>
  <div class="container_btn">
    <button class="default_btn" type="button">Язык
      <Icon
          class="icon_btn"
          name="iconamoon:arrow-down-2-light"></Icon>
    </button>
  </div>
</template>

<style scoped lang="scss">
.container_btn {

  .default_btn {
    width: 200px;
    height: 51px;
    color: #FFF;
    border: none;
    border-radius: 100px;
    background: $primary;
    font-weight: 500;
    line-height: 120%; /* 21.6px */
    letter-spacing: 0.18px;
  }

  .icon_btn {
    font-size: 2.144rem  /* 35/18 */;
  }
}
</style>