<script lang="ts" setup>
import { makeFirstCharUpper } from '@/utils/helper'

const topics = [
  'psychologie',
  'retreats',
  'familieopstellingen',
  'dokter jurriaan',
  'trauma',
  'depressie',
  'burnout',
  'anti-depressiva',
  'angst',
  'yoga',
]

useHead({
  title: 'Categorieën',
  meta: [
    {
      name: 'description',
      content: 'Hieronder staan alle categorieën waarover ik een blog heb geschreven of in de nabije toekomst zal schrijven.',
    },
  ],
  titleTemplate: 'Mar\'s Blog - %s',
})

defineOgImage()
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <CategoryHero />
    <div class="flex flex-wrap px-6 mt-12 gap-3">
      <CategoryCard v-for="topic in topics" :key="topic" :title="makeFirstCharUpper(topic)" />
    </div>
  </main>
</template>
