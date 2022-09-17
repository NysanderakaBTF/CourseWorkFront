<template>
<body>
  <GoogleMap api-key="AIzaSyAKUY_GBy6w7VgYk2VEd735yWx3MDiIz14" style="width: 100%; height: 500px" :center="center" :zoom="15">
    <Marker :options="{ position: center }" />
  </GoogleMap>
</body>
</template>
  
<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
export default defineComponent({
  name: 'Patner',
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 };

    return { center };
  },
});
</script>
  
<style lang="scss">
  *{
    max-width: 1500px;
    background-color: rgb(255, 251, 247);
    margin: 0 auto;
  }
</style>
  