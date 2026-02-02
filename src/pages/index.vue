<template>
  <section ref="heroRef" class="hero-section d-flex align-center justify-center">
    <div class="hero-content text-center">
      <h1 ref="titleRef" class="text-h2 font-weight-bold">Shonan International</h1>
      <p ref="subtitleRef" class="text-h5 mt-4">Music Competition 2026</p>
    </div>
  </section>

  <v-container class="py-12">
    <v-row ref="bentoRef">
      <v-col cols="12" md="8">
        <v-card class="bento-card" height="400" hover image="https://picsum.photos/800/400?music=1">
          <v-card-title class="text-white">Latest News</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="bento-card mb-4" height="192" hover color="primary">
          <v-card-title>Schedule</v-card-title>
          <v-card-text>2026.11.01 - 11.15</v-card-text>
        </v-card>
        <v-card class="bento-card" height="192" hover color="secondary">
          <v-card-title>Venue</v-card-title>
          <v-card-text>湘南文化芸術ホール</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)

  const titleRef = ref<HTMLElement | null>(null)
  const subtitleRef = ref<HTMLElement | null>(null)
  const bentoRef = ref<HTMLElement | null>(null)

  onMounted(() => {
    const tl = gsap.timeline()
    
    if (titleRef.value && subtitleRef.value) {
      tl.from(titleRef.value, {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power3.out"
      })
      .from(subtitleRef.value, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8")
    }

    if (bentoRef.value) {
      gsap.from(".bento-card", {
        scrollTrigger: {
          trigger: bentoRef.value,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        scale: 0.95,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.7)"
      })
    }
  })
</script>

<style scoped>
.hero-section {
  height: 85vh;
  background: linear-gradient(to bottom, #1a237e, #0d47a1);
  color: white;
}
.bento-card {
  border-radius: 16px !important;
  transition: transform 0.3s ease;
}
.header-blur {
  background: rgba(255, 255, 255, 0.7) !important;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05) !important;
}
</style>
