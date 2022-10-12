<template>
  <div class="container">
    <div class="a_bo">
      <p>
        Мы понимаем, что многим неудобно посещать наш фирменный магазин, поэтому Вы можете купить нашу продукцию у наших партнеров! Только у них представлены самые свежие новинки и наиболее широкий ассортимент. Контроль условий хранения продукции проводится нашими специалистами, поэтому можете не переживать за качество покупаемых лакомств!
      </p>
    </div>
      <div class="map">
        <l-map
          v-model="zoom"
          v-model:zoom="zoom"
          :center="[53.887796, 27.489172]"
        >
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          ></l-tile-layer>
          <l-control-layers />
    
          <l-marker :lat-lng="[53.880369, 30.318165]">
            <l-popup>
              Магазин 2
            </l-popup>
          </l-marker>
          <l-marker :lat-lng="[53.918332,30.293537]">
            <l-popup>
              Магазин 1
            </l-popup>
          </l-marker>
          <l-marker :lat-lng="[53.929571, 30.251579]">
            <l-popup>
              Магазин 3
            </l-popup>
          </l-marker>
          <l-marker :lat-lng="[53.905900, 27.539299]">
            <l-popup>
              Магазин 4
            </l-popup>
          </l-marker>
          <l-marker :lat-lng="[53.890265, 27.590027]">
            <l-popup>
              Магазин 5
            </l-popup>
          </l-marker>
          <l-marker :lat-lng="[53.913014, 27.478546]">
            <l-popup>
              Магазин 6
            </l-popup>
          </l-marker>
          <l-marker :lat-lng="[53.887796, 27.430563]">
            <l-popup>
              Магазин 7
            </l-popup>
          </l-marker>
          <l-marker :lat-lng="[53.907738, 27.489172]">
            <l-popup>
              Магазин 8
            </l-popup>
          </l-marker>
          <l-marker :lat-lng="[52.259913, 20.998353]">
            <l-popup>
              Магазин 9
            </l-popup>
          </l-marker>
          <l-marker :lat-lng="[52.272296, 21.017773]">
            <l-popup>
              Магазин 10
            </l-popup>
          </l-marker>
          
        </l-map>
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

export default {
  name:'Patner',
  components: {
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
  data() {
    return {
      zoom: 6,
      iconWidth: 25,
      iconHeight: 40,
    };
  },
  methods: {
    log(a) {
      console.log(a);
    },
  },
};

</script>
  
<style lang="scss">
.map, l-map{
  background-color: transparent;

}
.a_bo{
  background-color: rgb(255, 251, 247);
  text-align: center;
}
</style>
  