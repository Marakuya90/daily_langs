<script setup lang="ts">
useSeoMeta({
  title: 'DailyLangs'
})
</script>

<template>
  <div class="main">
    <div class="main_label">
      <h1 class="main_label_fonts">Курсы</h1>
      <div class="yellow_fonts"><span class="main_label_fonts">английского языка</span></div>
    </div>
    <div class="main_container_grid">
      <LayoutCourse/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  margin-top: 1.8rem  /* 27/18 */;
  height: 56.111rem;

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
      width: 28.667rem  /* 516/18 */;
      height: 4.389rem  /* 79/18 */;
      border-radius: 5.556rem  /* 100/18 */;
      background-color: $yellow_green;
    }
  }

  .main_container_grid {
    margin-top: 2.178rem;  /* 59/18 */
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 3.345rem /* 53/18 */;
    row-gap: 1.667rem /* 30/18 */;
  }
}

</style>