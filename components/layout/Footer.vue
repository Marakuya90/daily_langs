<script setup lang="ts">

</script>

<template>
  <footer>
    <div class="footer">
    <div class="footer_main">
      <ul class="footer_link">
        <li><NuxtLink to="/policy">Политика конфиденциальности</NuxtLink></li>
        <li><NuxtLink to="/terms">Условия пользования</NuxtLink></li>
      </ul>
    <img src="/logo_white.svg" alt="logo">
    </div>
    <span>&#169;DailyLangs | 2023. Все права защищены</span>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  height: 13.333rem;
  background-color: $primary;
  &_main {
    display: flex;
    justify-content: space-between;
    width: 64.444rem;
    margin: 0 auto;
    padding: 3.056rem 0 2.879rem 0 ;
  }
  &_logo {
    fill: #FFFFFF;
  }
  &_link {
  }
}

</style>