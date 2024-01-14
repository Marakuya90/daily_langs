<script setup lang="ts">
import {LEVEL_DATA, SKILLS_DATA} from "~/components/layout/filter.data";

const durationsValue = ref('6')
</script>

<template>
  <aside class="container_aside">
    <LayoutButtonDefault></LayoutButtonDefault>
    <div class="filters container_filter">
      <div class="duration container_filter">
        <span class="durations_title aside_title">Продолжительность</span>
        <div class="durations_flex filter_flex">
          <label for="durations_range" id="durations_label">От 1 до {{ durationsValue }} мес.</label>
          <input
              type="range"
              min="1"
              max="6"
              step="1"
              v-model="durationsValue"
              name="durations_range"
              id="durations_range">
        </div>
      </div>
      <div class="level container_filter">
        <span class="level_title aside_title">Сложность</span>
        <div class="filter_flex">
          <div v-for="item in LEVEL_DATA" :key=item.name>
            <input type="radio" name="level" :id="item.name" :value="item.name" :checked="item.check">
            <label :for="item.name">{{ item.name }}</label>
          </div>
        </div>
      </div>
      <div class="skills container_filter">
        <span class="skills_title aside_title">Навыки</span>
        <div class="filter_flex">
          <div v-for="item in SKILLS_DATA" :key=item.name>
            <input type="checkbox" name="level" :id="item.name" :value="item.name">
            <label :for="item.name">{{ item.name }}</label>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped lang="scss">
.container_aside {
  margin-top: 0.7rem; /* 100/18 */
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 21.6px */
  letter-spacing: 0.01rem;

  .filters {
    margin-top: 4.222rem;  /* 76/18 */
  }
  .container_filter {
    @include flex-column;
    gap: 1.667rem;
  }
  .filter_flex {
    @include flex-column;
    gap: 0.66rem;
  }

  input[type=range]  {
    width: 10.5rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  input[type=range]::-webkit-slider-runnable-track {
    height: 0.083rem;
    background-color: $primary;
  }
  input[type=range]::-webkit-slider-thumb {
    background: $primary;
    border-radius: 10px;
    cursor: pointer;
    width:14px;
    height: 14px;
    -webkit-appearance: none;
    margin-top: -6px;
  }

  input[type=range]::-moz-range-track {
    height: 0.083rem;
    background-color: $primary;
  }
  input[type=range]::-moz-range-thumb {
    background: $primary;
    border-radius: 10px;
    cursor: pointer;
  }
}

.aside_title {
  font-weight: 600;
}
@media (max-width: 393px) {
  .container_aside{
    display: none;
  }
}
</style>