<template>
<div class="timeline">
  <h1>年間スケジュール</h1>
  <p>山本研究室の一年を紹介します</p>
  <p>ゼミは週に2度(月木)で発表は3週に１度程度です</p>
  <p>コアタイムはありません</p>
  <v-timeline>
    <v-timeline-item
      v-for="(month, i) in months"
      :key="i"
      :color="month.color"
      small
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${month.color}--text`"
          v-text="month.month"
        ></span>
      </template>
      <v-card
        :color="month.color"
        dark
      >
        <v-card-title class="text-h6">
          <h2 :class="`headline font-weight-light mb-4 white--text`"
          v-text="month.title">
        </h2>
        </v-card-title>
        <v-card-text class="white text--primary">
          <p v-text="month.summary">
          </p>
          <v-dialog
            :retain-focus=false
            :overlay-opacity = "0.05"
            v-model="dialog"
            width="500"
          >

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
         <div :class="`headline font-weight-light mb-4 white--text`"
          v-text="month.title">
         </div>
        </v-card-title>

        <v-card-text>
         <span v-text="month.summary">
          </span>        
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</div>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      months: [
        {
          color: 'pink',
          month: 'April',
          title: '研究室配属',
          summary: '研究室配属されます',
        },
        {
          color: 'cyan',
          month: 'May',
          title: '研究テーマ決め',
          summary: '先輩から卒論テーマの紹介があり、研究テーマが決めていきます',
        },
        {
          color: 'cyan',
          month: 'July',
          title: '院試',
          summary: '理科大の推薦院試が初旬、月末に一般入試があります',
        },
        {
          color: 'cyan',
          month: 'August',
          title: '夏休み',
          summary: 'ゼミはお休みになります。コロナ前はゼミ旅行がありました',
        },
        {
          color: 'cyan',
          month: 'September',
          title: '中間報告',
          summary: '前期までの成果を報告します',
        },
        {
          color: 'cyan',
          month: 'December',
          title: '卒論審査会用プレゼン',
          summary: '審査会用のプレゼンの内容を詰めていきます',
        },
        {
          color: 'cyan',
          month: 'January',
          title: '卒論執筆',
          summary: 'いそがしくなります',
        },
        {
          color: 'cyan',
          month: 'February',
          title: '卒論審査会',
          summary: '二月の初旬に審査会があります。7分間のプレゼンテーションです。',
        },
      ],
    }),
  };
</script>

<style lang="scss" scoped>

.timeline{
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