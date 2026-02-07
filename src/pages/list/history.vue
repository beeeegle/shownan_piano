<template>
  <List :items="historyData" />
</template>
<script setup lang="ts">
  import List from '@/components/List.vue'
  const historyData = [
    {
      date: '2025.04.20',
      title: '第23回 湘南国際ピアノコンクール',
      content: '過去最多となる500名以上の応募があった第23回大会。若手ピアニストの登竜門として、非常にレベルの高い演奏が繰り広げられました。\n優勝者の山田太郎氏は、その後ショパン国際コンクールでも入賞を果たすなど、輝かしい軌跡を残しています。',
      image: 'https://picsum.photos/800/400?piano&sig=23',
    },
    {
      date: '2024.04.18',
      title: '第22回 湘南国際ピアノコンクール',
      content: '湘南文化芸術ホールで開催。地元市民との交流を深める「街角コンサート」を初めて実施し、音楽が街に溢れる一週間となりました。',
      image: 'https://picsum.photos/800/400?music&sig=22',
    },
    {
      date: '2023.04.15',
      title: '第21回 湘南国際ピアノコンクール',
      content: 'デジタル配信を本格導入した記念すべき大会。世界15カ国からオンラインで視聴され、国際的な認知度が大きく向上しました。',
      image: 'https://picsum.photos/800/400?classical&sig=21',
    },
    {
      date: '2022.04.22',
      title: '第20回 20周年記念大会',
      content: 'コンクール設立20周年を祝し、歴代の優勝者によるガラ・コンサートを開催。満席の会場で感動的な演奏が披露されました。',
      image: 'https://picsum.photos/800/400?grandpiano&sig=20',
    },
    {
      date: '2012.04.10',
      title: '第10回 節目を飾る記念公演',
      content: '10回目を迎え、審査員に海外の有名音楽大学教授を多数招聘。国際コンクールとしての地位を確固たるものにしました。',
      image: 'https://picsum.photos/800/400?grayscale&sig=10',
    },
    {
      date: '2002.05.01',
      title: '第1回 湘南国際ピアノコンクール 設立',
      content: '「湘南から世界へ」を合言葉に、当コンクールが産声をあげた第1回大会。ここから多くの才能ある若き音楽家たちが羽ばたいていきました。',
      image: 'https://picsum.photos/800/400?grayscale&sig=1',
    },
  ]
</script>
