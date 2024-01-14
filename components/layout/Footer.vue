<script setup lang="ts">

</script>

<template>
  <footer>
    <div class="footer">
      <div class="footer_main">
        <div class="footer_flex">
          <ul class="footer_link">
            <li>
              <NuxtLink to="/policy">Политика конфиденциальности</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/terms">Условия пользования</NuxtLink>
            </li>
          </ul>
          <img src="/logo_white.svg" alt="logo">
        </div>
        <div class="footer_rights">
          <span>&#169;DailyLangs | 2023. Все права защищены</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  height: 13.333rem;
  background-color: $primary;

  &_main {
    width: 64.444rem;
    margin: 0 auto;
    padding: 3.056rem 0 2.879rem 0;
  }

  &_flex {
    display: flex;
    justify-content: space-between;
  }

  &_logo {
    fill: #FFFFFF;
  }

  &_link {
    display: flex;
    flex-direction: column;
    gap: 0.722rem;

    li a {
      color: #FFF;
      @include font_settings;
    }
  }

  &_rights {
    margin-top: 54px;
    text-align: center;
    color: #FFF;
    @include font_settings;
  }
}

@media (max-width: 393px) {
  * {
    font-size: 14px;
  }
  .footer {
    height: 9.056rem;

    &_main {
      width: 21.833rem;
      padding: 1rem 0.833rem 1.722rem 0.833rem;
    }

    img {
      width: 6.944rem;
      height: 1.389rem;
    }

    &_rights {
      margin-top: 1.556rem;
      letter-spacing: 0.14px;
    }
  }
}

</style>