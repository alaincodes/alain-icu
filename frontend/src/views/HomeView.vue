<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="grid place-content-center h-dvh p-6 bg-blue text-coral-red text-center">
    <div
      class="grid grid-cols-1 place-items-center gap-2 p-6 rounded-lg border border-solid border-coral-red"
    >
      <a
        href="https://www.linkedin.com/in/alain-t-6a95071ba/"
        target="_blank"
        class="hover:text-beige duration-300"
      >
        <h1 class="p-4 text-2xl font-bold">Alain TRAN</h1>
      </a>
      <button class="p-4 text-xl font-medium hover:text-beige duration-300 animate-heartbeat">
        <RouterLink to="/about">Frontend developer</RouterLink>
      </button>
    </div>
  </main>
</template>
