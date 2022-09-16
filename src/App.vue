<template>
  <div class="App">
    <Navbar/>
    <router-view></router-view>
    <Foot/>
  </div>

</template>

<script>
import mainpage from '@/components/mainpage';
import Navbar from './components/navbar.vue';
import Mainpage from './components/mainpage.vue';
import Foot from './components/foot.vue';

export default{
  name: 'App',
  components: {
    mainpage,
    Navbar,
    Mainpage,
    Navbar,
    Foot
}
}
</script>

<style lang="scss">
*{

  font-family: 'Open Sans';
  max-width: 1500px;
  background-color: rgb(255, 251, 247);
  padding: 0px;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
