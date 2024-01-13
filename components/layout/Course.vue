<script setup lang="ts">
import {COURSES_DATA} from "~/components/layout/filter.data";

</script>

<template>
  <div class="courses" v-for="item in COURSES_DATA">
    <div class="container_card">
      <img class="course_design_element" :src="item.background" :alt="item.background">
      <img class="course_design_speaker" :src="item.img" :alt="item.img">
      <div class="course_description">
        <span class="course_title">{{ item.title }}</span>
        <span class="course_title yellow"> {{ item.level }}</span>
        <div class="course_speaker">
          <div><span>{{ item.speaker }}</span></div>
          <img src="/design_elem.svg" alt="polygon">
        </div>
        <div class="price">
          <span class="main_price">{{ item.price }}{{ item.currency }}</span>
          <div class="container_position">
            <div class="sale">
              <span>{{ item.sale }}</span>
            </div>
            <span class="old_price">{{ item.old_price }}</span>
          </div>
        </div>
        <div class="footer_card">
          <img class="country_flag" :src="item.icon" alt="flag">
          <div class="course_link">
            <span>Подробнее</span>
            <a href="">
              <Icon name="material-symbols-light:arrow-insert" class="footer_card_icon"></Icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.courses {
  display: flex;
  flex-direction: column;
  width: 22.222rem; /* 400/18 */
  height: 18.944rem; /* 341/18 */
  border-radius: 1.667rem; /* 30/18 */
  background: $primary;
  position: relative;
  padding: 1.333rem 1.167rem 0.667rem 1.222rem;
}

.course_design_element {
  position: absolute;
  top: 1.722rem; /* 31/18 */
  right: 1.611rem; /* 29/18 */
  z-index: 1;
}

.course_design_speaker {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
}

.course_description {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
}

.course_title {
  display: block;
  color: #FFF;
  font-size: 24px;
  font-weight: 800;
  line-height: 120%; /* 28.8px */
  letter-spacing: 0.24px;
}

.yellow {
  color: $yellow;
}

.course_speaker {
  margin-top: 1.111rem /* 20/18 */
;
  margin-left: 4.444rem /* 80/18 */
;
  position: relative;
  align-self: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10.222rem /* 184/18 */
  ;
    height: 1.778rem /* 32/18 */
  ;
    background: $yellow_green;
    border-radius: 3.333rem /* 60/18 */
  ;
  }

  span {
    font-family: Montserrat, sans-serif;
    font-size: 0.778rem /* 14/18 */
  ;
    font-weight: 600;
    line-height: 150%; /* 21px */
    letter-spacing: 0.008rem /* 0.14/18 */
  ;
  }

  img {
    position: absolute;
    bottom: -1rem /* -18/18 */
  ;
    left: -0.722rem /* -13/18 */
  ;
    z-index: 3;
  }
}

.price {
  display: flex;
  flex-direction: column;
  justify-items: end;
  color: #FFF;
  line-height: 120%; /* 48px */
  letter-spacing: 0.4px;
  align-items: flex-end;
  margin-top: 63px;

  .main_price {
    font-size: 2.222rem;
    font-weight: 800;
    width: 6.778rem;
    display: block;
    margin-right: 58px;
  }

  .container_position {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .old_price {
    font-size: 20px;
    font-weight: 800;
    text-decoration-line: line-through;
    text-decoration-color: $pink;
    width: 61px;
    display: block;
    margin-right: 27px;
  }

  .sale {
    width: 2.667rem;
    height: 1rem;
    border-radius: 199px;
    background: $pink;
    display: flex;
    justify-content: center;
    align-self: end;
    align-items: center;

    span {
      font-size: 10px;
      font-weight: 600;
    }
  }

}

.footer_card {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 45px;

  span {
    font-weight: 500;
    line-height: 120%;
    letter-spacing: 0.01rem;
    color: #FFF;
  }

  .country_flag {
    width: 3.667rem;
    height: 3.667rem;
  }

  .footer_card_icon {
    transform: rotate(90deg);
    color: $yellow_green;
    font-size: 1.667rem;
  }

  .course_link {
    padding-top: 28px;
    cursor: pointer;
  }
}
</style>