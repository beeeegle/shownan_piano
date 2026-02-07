<template>
  <List :items="scheduleData" />
</template>
<script setup lang="ts">
  import List from '@/components/List.vue'
  const scheduleData = [
    {
      date: '2026.03.01 - 03.31',
      title: 'エントリー受付期間',
      content: '第24回大会への参加申込を受け付けます。公式サイトの専用フォームより、必要書類および演奏動画（予選審査用）をアップロードしてください。\n締切直前はサーバーが混み合う可能性があるため、早めの申請を推奨いたします。',
      image: 'https://picsum.photos/800/400?piano&sig=sch1',
    },
    {
      date: '2026.04.15',
      title: '書類・動画選考（第1次審査）結果発表',
      content: '厳正なる審査の上、通過者の受験番号を公式サイトにて発表いたします。通過者にはメールにて第2次予選（対面審査）の詳細をご案内いたします。',
      image: 'https://picsum.photos/800/400?document&sig=sch2',
    },
    {
      date: '2026.05.10',
      title: '第2次予選（湘南市民ホール）',
      content: '神奈川県藤沢市の湘南市民ホールにて、一般公開形式での対面審査を行います。若き才能たちが生み出す、緊張感と情熱に満ちた演奏をぜひ会場で体感してください。',
      image: 'https://picsum.photos/800/400?hall&sig=sch3',
    },
    {
      date: '2026.06.20',
      title: '本選（ファイナルコンサート）',
      content: '湘南文化芸術ホール 大ホールにて開催。ファイナリストによる渾身のフルプログラム演奏が行われます。オーケストラとの共演も見どころの一つです。',
      image: 'https://picsum.photos/800/400?concert&sig=sch4',
    },
    {
      date: '2026.06.21',
      title: '授賞式・入賞者記念披露演奏会',
      content: 'コンクールの締めくくりとして、各賞の発表および授賞式を執り行います。後半には入賞者によるエキシビション演奏会を予定しております。',
      image: 'https://picsum.photos/800/400?award&sig=sch5',
    },
  ]
</script>
