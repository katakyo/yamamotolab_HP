<template>
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
      <div class="py-4">
        <h2 :class="`headline font-weight-light mb-4 ${month.color}--text`"
          v-text="month.title">
        </h2>
        <div v-text="month.summary">
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
  export default {
    data: () => ({
      months: [
        {
          color: 'pink',
          month: 'April',
          title: '研究室配属',
          summary: '研究室配属されるぞ',
        },
        {
          color: 'cyan',
          month: 'May',
          title: '研究テーマ決め',
          summary: '研究室配属されるぞ',
        },
        {
          color: 'cyan',
          month: 'June',
          title: '研究室配属',
          summary: '研究室配属されるぞ',
        },
        {
          color: 'cyan',
          month: 'July',
          title: '研究室配属',
          summary: '研究室配属されるぞ',
        },
        {
          color: 'cyan',
          month: 'August',
          title: '研究室配属',
          summary: '研究室配属されるぞ',
        },
        {
          color: 'cyan',
          month: 'September',
          title: '研究室配属',
          summary: '研究室配属されるぞ',
        },
        {
          color: 'cyan',
          month: 'October',
          title: '研究室配属',
          summary: '研究室配属されるぞ',
        },
        {
          color: 'cyan',
          month: 'November',
          title: '研究室配属',
          summary: '研究室配属されるぞ',
        },
        {
          color: 'cyan',
          month: 'December',
          title: '研究室配属',
          summary: '研究室配属されるぞ',
        },
        {
          color: 'cyan',
          month: 'January',
          title: '研究室配属',
          summary: '研究室配属されるぞ',
        },
        {
          color: 'cyan',
          month: 'February',
          title: '研究室配属',
          summary: '研究室配属されるぞ',
        },
        {
          color: 'cyan',
          month: 'March',
          title: '研究室配属',
          summary: '研究室配属されるぞ',
        },
      ],
    }),
  };
</script>