<script setup lang="ts">

</script>

<template>
  <footer>
    <div class="footer">
    <div class="footer_main">
      <ul class="footer_link">
        <li><a href="">Политика конфиденциальности</a></li>
        <li><a href="">Условия пользования</a></li>
      </ul>
    <NuxtImg src="/logo.svg"></NuxtImg>
    </div>
    <span>&#169;DailyLangs | 2023. Все права защищены</span>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  height: 13.333rem;
  background-color: $primary;
}
.footer_main {
  display: flex;
  justify-content: space-between;

}
</style>