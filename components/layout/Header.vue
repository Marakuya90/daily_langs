
<template>
  <header class="header_container">
    <NuxtLink to="/" class="logo">
      <img src="/logo.svg" alt="logo">
    </NuxtLink>
    <nav class="nav">
      <ul class="nav_list">
        <li class="activ_link">
          <NuxtLink to="/courses">Курсы</NuxtLink>
        </li>
        <li><NuxtLink href="/articles">Статьи</NuxtLink></li>
        <li><NuxtLink href="questions">Вопросы</NuxtLink></li>
      </ul>
    </nav>
    <div class="user_block">
      <button class="find">
        <img src="/search.svg" alt="search">
      </button>
      <Icon
          class="icon_user"
          name="mingcute:user-4-fill"></Icon>
      <select class="select_user" id="select_user">
        <option id="ru" name="ru">RU</option>
      </select>
    </div>
  </header>
</template>

<style scoped lang="scss">

.header_container {
  margin: 2.2rem auto 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo img {
    width: 12.438rem;
    height: 2.688rem;
  }

  .nav {
    margin-left: 15.678rem /* 248/18 */
  ;

    .nav_list {
      display: flex;
      gap: 4.038rem;
      font-weight: 500;
      line-height: 120%; /* 21.6px */
      letter-spacing: 0.01rem /* 0.18/18 */
    ;
    }

    .activ_link {
      color: $primary;
    }
  }

  .user_block {
    display: flex;
    gap: 1.313rem;
    align-items: center;
    width: 10.022rem;
  }

  .find {
    background: none;
    border: none;
    height: 1.938rem;
    width: 1.938rem;
    cursor: pointer;

    img {
      width: 1.722rem;
      height: 1.722rem;
    }
  }

  .icon_user {
    width: 3.488rem;
    height: 3.488rem;
    color: $primary;
  }

  .select_user {
    border: none;
    height: 1.375rem;
    font-weight: 600;
    line-height: 120%; /* 21.6px */
    letter-spacing: 0.01rem;
    cursor: pointer;
  }
}
</style>
<script setup lang="ts">
</script>