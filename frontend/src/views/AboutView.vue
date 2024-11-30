<script setup>
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'

const projects = reactive({
  ciamt: {
    name: 'Ciamt',
    url: 'https://www.ciamt.org'
  },
  beneteau: {
    name: 'Beneteau',
    url: 'https://www.beneteau.com'
  },
  delphia: {
    name: 'Delphia',
    url: 'https://www.delphiayachts.com'
  },
  'Lustucru Selection': {
    name: 'Lustucru Selection',
    url: 'https://www.lustucru-selection.fr'
  },
  Opsone: {
    name: 'Opsone',
    url: 'https://www.opsone.net'
  },
  'Belair Monange': {
    name: 'Belair Monange',
    url: 'https://www.belairmonange.com'
  },
})
</script>

<template>
  <main
    class="space-y-4 grid place-content-center gap-6 h-dvh p-6 bg-blue text-xl text-coral-red text-center"
  >
    <nav>
      <ul class="flex justify-center flex-wrap gap-x-6 gap-y-4">
        <li v-for="(project, index) in projects" :key="index">
          <a :href="project.url" target="_blank" class="hover:text-beige">{{ project.name }}</a>
        </li>
      </ul>
    </nav>

    <RouterLink
      to="/"
      class="text-xl font-medium hover:text-coral-red duration-300 animate-heartbeat text-beige"
      >Go back</RouterLink
    >
  </main>
</template>
