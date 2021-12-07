<template>
<v-container>
  <div class="research">
  <h1>研究テーマ</h1>
<v-row>
      <v-col v-for="item in items" :key="item">
        <v-card :loading="loading" href="/research"
        class="mx-auto" width="300" height="270" padding = "20">
          
          <v-img
            height="180px"
            :src= "item.image.url"
          >
          </v-img>
          <v-card-text class="font-weight-black">{{ item.title }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</v-container>
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
  padding: 60px;
  h1 {
    position: relative;
    display: inline-block;
    padding: 0 55px;
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
</style>