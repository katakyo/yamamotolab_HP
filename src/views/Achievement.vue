<template>
  <div class="achievement">
      <div class="table_data">
      <h1>研究業績</h1> 
      <p>山本研究室の研究業績です</p>
  <v-data-table
    :headers="headers"
    :items="achievements"
    :item-key="title"
    class="elevation-1"
  >
    <template v-slot:[`header.name`]="{ header }">
      {{ header.text.toUpperCase() }}
    </template>
  </v-data-table>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    search: '',
    headers: [
        {text: 'title', value: 'title'},
        {text: 'name', value: 'name'},
        {text: 'journal', value: 'journal'},
        {text: 'date', value: 'date'},
    ],
    achievements: [],
    }
  ),
  mounted() {
    this.getnames();
  },
  methods: {
    async getnames() {
      axios.get(
        'https://yamamotolab.microcms.io/api/v1/achievement?limit=300', {
          headers : {'X-API-KEY': process.env.VUE_APP_X_API_KEY },
        })
        .then((res) => {
          this.achievements = res.data.contents;
        });
    },
  },
};
</script>

<style lang="scss" scoped>

.achievement{
  padding: 60px;
}

</style>