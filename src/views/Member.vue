<template>
<v-contents>
<div class = "member">
  <h1>研究室メンバー</h1>
  <h2>M2</h2>
  <div v-for="item1 in M2" :key="item1">
    {{item1.name}}
  </div>
  <h2>M1</h2>
  <div v-for="item2 in M1" :key="item2">
    {{item2.name}}
  </div>
  <h2>B4</h2>
  <div v-for="item3 in B4" :key="item3">
    {{item3.name}}
  </div>
</div>
</v-contents>
</template>

<script>
import axios from 'axios';

export default {
  data: () => (
    { items: [],
      M1: [],
      M2: [],
      B4: [],
      other : [],
    }
  ),
  mounted() {
    this.getnames();
  },
  methods: {
    async getnames() {
      axios.get(
        'https://yamamotolab.microcms.io/api/v1/member?limit=30', {
          headers : {'X-API-KEY': process.env.VUE_APP_X_API_KEY },
        })
        .then((res) => {
          this.items = res.data.contents;
          for (let i = 0; i < this.items.length; i++) {
            if ( this.items[i].grade[0] === 'M1') {
              this.M1.push(this.items[i]);
            } else if (this.items[i].grade[0] === 'M2') {
              this.M2.push(this.items[i]);
            } else if (this.items[i].grade[0] === 'B4') {
              this.B4.push(this.items[i]);
            } else {
              this.other.push(this.items[i]);
            }
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>

.member {
  padding: 60px;
}
</style>