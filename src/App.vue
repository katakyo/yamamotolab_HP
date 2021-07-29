<template>
  <v-app>
    <Toolbar/>
    <v-content>
      <router-view/>
    </v-content>
    <Footer/>
  </v-app>
</template>
 
<script>
import Toolbar from './components/Toolbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Toolbar,
    Footer,
  },
};
</script>

<style lang="scss" scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>