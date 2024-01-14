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
      <svg class="burger_btn" xmlns="http://www.w3.org/2000/svg" width="37" height="20" viewBox="0 0 37 20" fill="none">
        <line y1="1" x2="37" y2="1" stroke="#C05AFF" stroke-width="2"/>
        <line y1="10" x2="37" y2="10" stroke="#C05AFF" stroke-width="2"/>
        <line y1="19" x2="37" y2="19" stroke="#C05AFF" stroke-width="2"/>
      </svg>
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
    margin-left: 15.678rem;

    .nav_list {
      display: flex;
      gap: 4.038rem;
      font-weight: 500;
      line-height: 120%; /* 21.6px */
      letter-spacing: 0.01rem;
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
  .burger_btn {
    display: none;
  }
}
@media (max-width: 393px) {
  .header_container {
    margin: 1.833rem auto 0 auto;
    .nav, .find img, .select_user {
      display: none;
    }
    .logo img {
      width: 7.278rem;
      height: 1.5rem;
    }
    .icon_user {
      width: 2.226rem;
      height: 2.252rem;
    }
    .burger_btn {
      display: block;
    }
  }


}
</style>