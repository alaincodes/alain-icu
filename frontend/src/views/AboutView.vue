<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <main class="space-y-2 grid place-content-center h-dvh p-6 bg-blue text-coral-red text-center">
    <nav>
      <ul>
        <li>
          <a href="https://www.ciamt.org" target="_blank" class="hover:text-beige">Ciamt</a>
        </li>
        <li>
          <a href="https://www.beneteau.com" target="_blank" class="hover:text-beige">Beneteau</a>
        </li>
        <li>
          <a href="https://www.delphiayachts.com" target="_blank" class="hover:text-beige"
            >Delphia Yachts</a
          >
        </li>
        <li>
          <a href="https://www.lustucru-selection.fr" target="_blank" class="hover:text-beige"
            >Lustucru Selection</a
          >
        </li>
        <li>
          <a href="https://www.opsone.net" target="_blank" class="hover:text-beige">Opsone</a>
        </li>
        <li>
          <a href="https://www.panzanifoodservice.com" target="_blank" class="hover:text-beige"
            >Panzani Food Service</a
          >
        </li>
        <li>
          <a href="https://www.belairmonange.com" target="_blank" class="hover:text-beige"
            >Belair Monange</a
          >
        </li>
      </ul>
    </nav>

    <div>
      <button class="text-xl font-medium hover:text-beige duration-300 animate-heartbeat">
        <RouterLink to="/">Retour</RouterLink>
      </button>
    </div>
  </main>
</template>
