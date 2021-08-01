<template>
  <div class="research">
  <h1>研究テーマ</h1>
<v-row>
      <v-col v-for="item in items" :key="item">
        <v-card class="mx-auto" width="300" height="330" padding = "20">
          <v-img
            class="white--text align-end"
            height="200px"
            :src= "item.image.url"
          >
            <v-card-title>{{ item.title }}</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div class="summary">{{ item.summary }} </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
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