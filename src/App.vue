<template>
  <div class="App">
    <Navbar/>
    <div class="haha">
      <router-view></router-view>
    </div>
    <Foot/>
  </div>

</template>

<script>
import Navbar from './components/navbar.vue';
import Mainpage from './components/mainpage.vue';
import Foot from './components/foot.vue';
import Patner from './components/partner.vue';

export default{
  name: 'App',
  components: {
    Mainpage,
    Navbar,
    Foot,
    Patner
}
}
</script>

<style lang="scss">
*{

  font-family: 'Open Sans';
 // max-width: 1500px;
  //background-color: rgb(255, 251, 247);
  padding: 0px;
  margin: 0 auto;
  box-sizing: border-box;
}
body{
  background-color: rgb(255, 251, 247);
}
.haha{
  min-height: 100%;
}
</style>
