<template>
  <header class="app-header">
    <div class="brand">
      <button class="icon-button mobile-only" type="button" aria-label="Mo menu" @click="$emit('toggle-sidebar')">
        <span aria-hidden="true">≡</span>
      </button>
      <router-link class="brand" to="/" aria-label="NailOps home">
        <span class="brand-mark">N</span>
        <span>
          NailOps
          <span class="brand-subtitle">Booking & SaaS</span>
        </span>
      </router-link>
    </div>
    <input class="field global-search" type="search" placeholder="Tim salon, lich hen, tenant..." />
    <div class="header-actions">
      <button class="icon-button" type="button" aria-label="Thong bao">!</button>
      <button class="icon-button" type="button" aria-label="Doi giao dien">A</button>
      <button class="button" type="button">Tai khoan</button>
    </div>
  </header>
</template>

<script setup lang="ts">
defineEmits<{
  (event: 'toggle-sidebar'): void
}>()
</script>
