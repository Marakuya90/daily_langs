<script setup lang="ts">
useSeoMeta({
  title: 'DailyLangs'
})
</script>

<template>
  <div class="main">
    <div class="container_grid">
      <LayoutSidebar/>
      <div class="filter_mobile_panel">
        <LayoutButtonDefault></LayoutButtonDefault>
        <div class="filter_btn_mobile">
          <Icon class="filter_btn_mobile_icon" name="mi:filter"></Icon>
        </div>
      </div>
      <div class="container_main_course">
        <div class="main_label">
          <h1 class="main_label_fonts">Курсы</h1>
          <div class="yellow_fonts"><span class="main_label_fonts">английского языка</span></div>
        </div>
        <div class="course_container_grid">
          <LayoutCourse/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.container_grid {
  display: grid;
  grid-template-columns: 1fr 2.87fr;
}

.main_label {
  display: flex;
  align-items: center;

  .main_label_fonts {
    font-size: 2.667rem;
    font-weight: 800;
    line-height: 120%; /* 57.6px */
    letter-spacing: 0.027rem;
  }

  .yellow_fonts {
    @include flex-center;
    width: 28.667rem;
    height: 4.389rem;
    border-radius: 5.556rem;
    background-color: $yellow_green;
  }
}

.course_container_grid {
  margin-top: 3.378rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 3.345rem;
  row-gap: 1.667rem;
}

.filter_mobile_panel {
  display: none;

  .filter_btn_mobile {
    width: 46px;
    height: 46px;
    background-color: $primary;
    border-radius: 100px;
    @include flex-center;
  }

  .filter_btn_mobile_icon {
    color: #FFFFFF;
    font-size: 1.333rem;
  }
}

@media (max-width: 393px) {
  .container_grid {
    grid-template-columns: 1fr;
  }
  .main_label {
    display: block;

    .main_label_fonts {
      font-size: 1.778rem;
      letter-spacing: 0.018rem;
    }

    .yellow_fonts {
      width: 20.278rem;
      height: 3.167rem;
    }
  }
  .course_container_grid {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    row-gap: 1rem;
    column-gap: 0;
  }
  .filter_mobile_panel {
    display: flex;
    gap: 0.333rem;
  }
  .container_main_course {
    margin-top: 2.167rem;
  }
}
</style>