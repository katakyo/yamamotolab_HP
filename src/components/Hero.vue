<template>
  <section class="home-hero">
    <v-container fluid fill-height class="home-hero__content">
      <v-row>
        <v-col class="home-hero__content-text">
          <p>ようこそ</p>
          <p>山本研究室へ.</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style  lang="scss" scoped>

@import "../styles/common/_mixin.scss";
.home-hero__content {
  background-image: url("../assets/Hero.png");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 30vh;
 
  /* ここから追加 */
  @include display_pc {
    height: 50vh;
  }
  /* ここまで追加 */
 
  &-text {
    color: white;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
 
    /* ここから追加 */
    @include display_pc {
      font-size: 40px;
    }
    /* ここまで追加 */
  }
}
</style>