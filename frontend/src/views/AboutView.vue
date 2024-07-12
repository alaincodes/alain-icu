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
  'Panzani Food Service': {
    name: 'Panzani Food Service',
    url: 'https://www.panzanifoodservice.com'
  },
  'Belair Monange': {
    name: 'Belair Monange',
    url: 'https://www.belairmonange.com'
  }
})
</script>

<template>
  <main
    class="space-y-3 grid place-content-center h-dvh p-6 bg-blue text-xl text-coral-red text-center"
  >
    <nav>
      <ul class="flex justify-center flex-wrap gap-x-6 gap-y-4">
        <li v-for="(project, index) in projects" :key="index">
          <a :href="project.url" target="_blank" class="hover:text-beige">{{ project.name }}</a>
        </li>
      </ul>
    </nav>

    <button
      class="text-xl font-medium hover:text-coral-red duration-300 animate-heartbeat text-beige"
    >
      <RouterLink to="/">Go back</RouterLink>
    </button>
  </main>
</template>
