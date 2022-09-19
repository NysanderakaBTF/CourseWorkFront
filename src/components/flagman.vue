<template>
    <div id="#fl">
            <div class="adv">
                <p>
                    Посетите наш фирменный магазин и вы никогда об этом не пожалеете и не забудете!
                    <br>
                    Вас ждут экслоюзивыне продукты и самые приятные цены.
                </p>  
            </div>
    
        <!-- <Carousel
          :navigation="true"
          :pagination="true"
          :startAutoPlay="true"
          :timeout="10000"
          class="carousel"
          v-slot="{ currentSlide }"
        >
          <Slide v-for="(slide, index) in carouselSlides" :key="index">
            <div v-show="currentSlide === index + 1" class="slide-info">
              <img :src="require(`../assets/${slide}.jpg`)" alt="" />
            </div>
          </Slide>
        </Carousel>  -->
         <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
            <ol class="carousel-indicators">
                <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active" aria-current="true" aria-label="First slide"></li>
                <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
                <li data-bs-target="#carouselId" data-bs-slide-to="3" aria-label="Third slide"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <img src="../assets/bg-1.jpg" class="d-block" alt="First slide" >
                </div>
                <div class="carousel-item">
                    <img src="../assets/bg-2.jpg" class="d-block" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img src="../assets/bg-4.jpg" class="d-block" alt="Third slide">
                </div>
                <div class="carousel-item">
                    <img src="../assets/bg-3.jpg" class="d-block" alt="4slide">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div> 
</template>

<script>
import Carousel from "../components/carousel.vue";
import Slide from "../components/slide.vue";
import Navbar from './navbar.vue';
import Foot from './foot.vue';
export default{
    name: "flagman",
    components: {
    Carousel, 
    Slide
  
    },
  setup() {
    const carouselSlides = ["bg-1", "bg-2", "bg-3","bg-4"];
    return { carouselSlides };
    }
}

</script>

<style lang="scss">
    
    #fl{
       justify-content: center;
        display: flex;
        flex-direction: column;
        font-family: 'Open Sans';

        background-color:rgb(255, 251, 247);
        color:rgb(81, 51, 46);
        justify-content: center;
    }
     .carousel {
        position: relative;
         //overflow: hidden;
        width: 60%;
        height: 40%;
        img{
            width: 600px;
            height: 400px;
        }

     } 
     @media screen and (max-width:800px ) {
        .carousel {
            position: relative;
             //overflow: hidden;
            img{
                width: 480px;
            }
         } 
     }


</style>