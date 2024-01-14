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
    @include font_settings;
  }

  .icon_btn {
    font-size: 2.144rem;
  }
}

@media (max-width: 393px) {
  .container_btn {
    .default_btn {
      width: 8.556rem;
      height: 2.389rem;
      font-size: 14px;
    }

    .icon_btn {
      font-size: 1.222rem;
    }
  }
}
</style>