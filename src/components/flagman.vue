<template>
    <div class="container">

            <div class="adv">
                <p>
                    Посетите наш фирменный магазин и вы никогда об этом не пожалеете и не забудете!
                    <br>
                    Вас ждут экслоюзивыне продукты и самые приятные цены. Эксклюзивные предложения и лояльная
                    бонусная программа.
                </p>  
            </div>

            <div class="car">
                <Carousel
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
                </Carousel> 
            </div>
        <div class="adr">
            <p>Фиренменный магазин находится по адресу: <br>
                <span style="font-style: italic; font-weight: bolder;">
                    ТЦ "Атриум", 2 этаж <br>
                    улица Ленинская 46, Могилёв, Беларусь
                </span> 
            </p>
        <div class="map">
            <l-map
            v-model="zoom"
            v-model:zoom="zoom"
            :center="[53.904163, 30.339451]"
            >
            <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            ></l-tile-layer>
            <l-control-layers />
        
            <l-marker :lat-lng="[53.904163, 30.339451]">
                <l-popup>
                Наш Фиренменный магазин
                </l-popup>
            </l-marker>
            
            </l-map>
        </div>
            
        </div>
    </div>
   
</template>

<script>
    import {
  LMap,
  LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  LTooltip,
  LPopup,
  LPolyline,
  LPolygon,
  LRectangle,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import Carousel from "../components/carousel.vue";
import Slide from "../components/slide.vue";
export default{
    name: "flagman",
    components: {
    Carousel, 
    Slide,
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    LPopup,
    LPolyline,
    LPolygon,
    LRectangle,
  
    },
  setup() {
    const carouselSlides = ["bg-1", "bg-2", "bg-3","bg-4"];
    return { carouselSlides };
},
  data() {
    return {
      zoom: 15,
      iconWidth: 25,
      iconHeight: 40,
    };
  },
  methods: {
    log(a) {
      console.log(a);
    },
  },
}

</script>

<style lang="scss">
    .adv{
        text-align: center;
    }
    .conteiner{
        max-width: 1500px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        font-family: 'Open Sans';

        background-color:rgb(255, 251, 247);
        color:rgb(81, 51, 46);
        justify-content: center;
        overflow: hidden;
    }
    .car{
        max-width: 667px;
        max-height: 800px;
        box-sizing: border-box;
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
        button{
            position: absolute;
        }

     } 
     .map{
        background-color: transparent;   
        overflow: hidden;   
        height: 75vh; 
        width: auto;
        margin: 0 auto;
        margin-bottom: 3em;
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
     @media screen and (max-width:570px ) {
        .carousel {
            display:none;
        } 
     }


</style>