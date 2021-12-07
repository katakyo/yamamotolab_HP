<template>
<v-container>
<div class="Access">
  <h1>ACCESS MAP</h1>
    <div class="embed-responsive embed-responsive-4by3">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d679.2679176984038!2d139.9073143862273!3d35.918559929952416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018991af8fb06e7%3A0x9abe04e15ff5be1e!2z5p2x5Lqs55CG56eR5aSn5a2mIOmHjueUsOOCreODo-ODs-ODkeOCuSAxMuWPt-mkqA!5e0!3m2!1sja!2sjp!4v1627367840055!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <v-card>
      <v-card-text class="font-weight-black">
        所在地
      </v-card-text>
      <v-card-text>
        〒278-8510　
        千葉県野田市山崎2641　東京理科大学 12号館5階　山本研究室
      </v-card-text>
  </v-card>
  <v-card>
      <v-card-text class="font-weight-black">
        電話番号
      </v-card-text>
      <v-card-text>
        04-7124-1501（代)
      </v-card-text>
  </v-card>
  <v-card>
      <v-card-text class="font-weight-black">
        Fax番号
      </v-card-text>
      <v-card-text>
        04-7120-1741
      </v-card-text>
  </v-card>
  <v-card>
      <v-card-text class="font-weight-black">
        交通手段
      </v-card-text>
      <v-card-text>
        東武野田線(東武アーバンパークライン)運河駅下車徒歩5分 東京駅から55分
      </v-card-text>
  </v-card>
  </div>
  </v-container> 
</template>


<style lang="scss" scoped>
.embed-responsive {
  position: relative;
  display: block;
  height: 0;
  padding: 0;
  overflow: hidden;
  padding-bottom: 100%;
}
 
.embed-responsive .embed-responsive-item,
.embed-responsive embed,
.embed-responsive iframe,
.embed-responsive object,
.embed-responsive video { 
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  border: 0;
}
.embed-responsive.embed-responsive-16by9 {
  padding-bottom: 56.25%;
}
.embed-responsive.embed-responsive-4by3 {
  padding-bottom: 75%;
}
</style>>