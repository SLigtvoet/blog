<script lang="ts" setup>
useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        'Welkom op mijn blog site. Laat je verrassen door mijn fantastische content over het moederschap, vloggen, mentale worstelingen en psychologische nog iets',
    },
  ],
  titleTemplate: 'Mar\'s Blog - %s',
})

// a. Use the Composition API
defineOgImage({
  title: 'Mar\'s Blog',
  description: 'Welkom op mijn blog site. Laat je verrassen door mijn fantastische content over het moederschap, vloggen, mentale worstelingen en psychologische nog iets',
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <MainHero />
    <MainRecent />
    <MainTrending />
  </main>
</template>
