<script setup lang="ts">
useSeoMeta({
  title: 'DailyLangs'
})
</script>

<template>
  <div class="main">
    <div class="container_grid">
      <LayoutSidebar/>
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
    font-size: 2.667rem;
    font-weight: 800;
    line-height: 120%; /* 57.6px */
    letter-spacing: 0.027rem;

    .main_label_fonts {
      font-size: 2.667rem;
      font-weight: 800;
      line-height: 120%; /* 57.6px */
      letter-spacing: 0.027rem;
    }

    .yellow_fonts {
      display: flex;
      justify-content: center;
      align-items: center;
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

</style>