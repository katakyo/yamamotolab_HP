<template>
<v-contents>
<div class = "member">
  <h1>研究室メンバー</h1>
  <div v-for="item in items" :key="item">
    <p>{{item.grade[0]}} {{item.name}}</p>
  </div>
</div>
</v-contents>
</template>

<script>
import axios from 'axios';

export default {
  data: () => (
    { items: [],
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