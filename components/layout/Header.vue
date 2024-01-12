<script setup lang="ts">

</script>

<template>
  <header class="container">
    <NuxtLink to="/" class="logo">
      <NuxtImg src="/logo.svg"></NuxtImg>
    </NuxtLink>
    <nav class="nav">
      <ul class="nav_list">
        <li class="activ_link">Курсы</li>
        <li>Статьи</li>
        <li>Вопросы</li>
      </ul>
    </nav>
    <div class="user_block">
      <button class="find">
        <NuxtImg src="/search.svg"></NuxtImg>
      </button>
      <Icon
          class="icon_user"
          name="mingcute:user-4-fill"></Icon>
      <select class="select_user">
        <option>RU</option>
      </select>
    </div>
  </header>
</template>

<style scoped lang="scss">

.container {
  width: 1160px;
  margin: 3rem auto 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo img {
    width: 13.938rem;
    height: 2.688rem;
  }

  .nav {
    .nav_list {
      list-style: none;
      display: flex;
      gap: 4.438rem;
      font-size: 18px;
      font-weight: 500;
      line-height: 120%; /* 21.6px */
      letter-spacing: 0.18px;
    }

    .activ_link {
      color: $primary;
    }
  }


  .user_block {
    display: flex;
    gap: 1.313rem;
    align-items: center;
  }

  .find {
    background: none;
    border: none;
    height: 1.938rem;
    width: 1.938rem;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .icon_user {
    width: 3.188rem;
    height: 3.188rem;
    color: $primary;
  }

  .select_user {
    border: none;
    height: 1.375rem;
    font-size: 18px;
    font-weight: 600;
    line-height: 120%; /* 21.6px */
    letter-spacing: 0.18px;
    cursor: pointer;
  }
}
</style>