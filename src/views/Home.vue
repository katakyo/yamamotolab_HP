<template>
  <section class="home">
    <Hero/>
  </section>
</template>
<script>
import Hero from '../components/Hero.vue'
 
export default {
  components: {
    Hero
  }
}
</script>
<style lang="scss" scoped>
.home {
  padding-bottom: 50px;
}
</style>
