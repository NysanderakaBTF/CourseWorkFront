<template>
    <div class="carousel">
      <slot :currentSlide="currentSlide" />
  
      <div v-if="pagintationEnabled" class="pagination">
        <span
          @click="goToSlide(index)"
          v-for="(slide, index) in getSlideCount"
          :key="index"
          :class="{ active: index + 1 === currentSlide }"
        >
        </span>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  export default {
    props: ["startAutoPlay", "timeout", "pagination"],
    setup(props) {
      const currentSlide = ref(1);
      const getSlideCount = ref(null);
      const autoPlayEnabled = ref(
        props.startAutoPlay === undefined ? true : props.startAutoPlay
      );
      const timeoutDuration = ref(props.timeout === undefined ? 10000 : props.timeout);
      const pagintationEnabled = ref(
        props.pagination === undefined ? true : props.pagination
      );
      const nextSlide = () => {
        if (currentSlide.value === getSlideCount.value) {
          currentSlide.value = 1;
          return;
        }
        currentSlide.value += 1;
      };
      const goToSlide = (index) => {
        currentSlide.value = index + 1;
      };
      const autoPlay = () => {
        setInterval(() => {
          nextSlide();
        }, timeoutDuration.value);
      };
      if (autoPlayEnabled.value) {
        autoPlay();
      }
      onMounted(() => {
        getSlideCount.value = document.querySelectorAll(".slide").length;
      });
      return {
        currentSlide,
        nextSlide,
        getSlideCount,
        goToSlide,
        pagintationEnabled,
      };
    },
  };
  </script>
  
  <style lang="scss">
  .navigate {
    padding: 0 16px;
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    .toggle-page {
      display: flex;
      flex: 1;
    }
    .right {
      justify-content: flex-end;
    }
    i {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      background-color:  #603e31;
      color: #fff;
    }
  }
  .pagination {
    position: absolute;
    bottom: 24px;
    width: 100%;
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
    span {
      cursor: pointer;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }
    .active {
      background-color:  #603e31;
    }
  }
  .carousel{
    max-width: 667px;
    max-height: 400px;
    box-sizing: border-box;
    overflow: hidden;
  }
  </style>