<template>
  <section class="home">
    <Hero/>
    <About/>
    <Research/>
  </section>
</template>
<script>
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';
import Research from '../components/Research.vue';

export default {
  components: {
    Hero,
    About,
    Research,
  },
};
</script>
<style lang="scss" scoped>
.home {
  padding-bottom: 50px;
}
</style>
