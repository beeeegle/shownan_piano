<template>
  <List :items="newsData" />
</template>
<script setup lang="ts">
  import List from '@/components/List.vue'
  const newsData = [
    {
      date: '2026.02.01',
      title: '本選のチケット販売を開始いたしました',
      content: '本日より、公式チケットサイトにて本選の座席指定券の販売を開始いたしました。\n良いお席はお早めにお求めください。',
    },
    {
      date: '2026.01.15',
      title: '審査委員長からのメッセージ',
      content: '今回のコンクールに向けて、審査委員長より参加者の皆様へメッセージが届いております...',
      image: 'https://picsum.photos/800/400?music',
    },
    {
      date: '2025.12.20',
      title: '第2次予選の会場が決定しました',
      content: '第2次予選は神奈川県藤沢市の湘南市民ホールにて開催されます。アクセス情報や周辺の宿泊施設についても公式サイトでご案内しております。',
      image: 'https://picsum.photos/800/400?hall',
    },
    {
      date: '2025.11.30',
      title: 'エントリー受付を締め切りました',
      content: '多数のご応募、誠にありがとうございました。現在、書類・動画選考（第1次審査）を進めております。結果発表は2026年4月15日を予定しております。',
    },
  ]
</script>
