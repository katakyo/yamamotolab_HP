<template>
  <div class="research">
    <h1>研究テーマ</h1>
    <div v-for="item in items" :key="item">
      <v-container>
      <v-row>
      <v-col class="home-about__contents-img">
      <v-img
        max-height="300"
        max-width="500"
        :src= "item.image.url"
        >
      </v-img>
      </v-col>
      <v-col md="5" class="home-about__contents-text">
        <h2>{{ item.title}}</h2>
        <p>{{ item.summary }}</p>
      </v-col>  
      </v-row>
      </v-container>
    </div>
  </div>
</template>


// <script>
import axios from 'axios';

export default {
  name: 'Research',
  data: () => (
    {
      items: [],
    }
  ),
  mounted() {
    this.getnames();
  },
  methods: {
    async getnames() {
      axios.get(
        'https://yamamotolab.microcms.io/api/v1/researches', {
          headers : {'X-API-KEY': process.env.VUE_APP_X_API_KEY },
        })
        .then((res) => {
          this.items = res.data.contents;
        });
    },
  },
};
</script>


<style lang="scss" scoped>

.research{
  padding: 50px;
  h1 {
    position: relative;
    display: inline-block;
    padding: 0 45px;
  }

  h1:before, h1:after {
    content: '';
    position: absolute;
    top: 50%;
    display: inline-block;
    width: 45px;
    height: 1px;
    background-color: black;
  }

  h1:before {
    left:0;
  }
  h1:after {
    right: 0;
  }
  .summary {
  white-space: pre-wrap;
}
}
.home-about__contents {
  margin-top: 20px;
  justify-content: center;
  
  &-img {
    text-align: center;
  }
 
  &-text {
    word-wrap: break-word;
  }
}
</style>