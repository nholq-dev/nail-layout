<template>
  <div class="app-root">
    <AppHeader @toggle-sidebar="toggleSidebar" />
    <div class="app-shell">
      <AppSidebar :open="sidebarOpen" />
      <button
        v-if="sidebarOpen"
        class="sidebar-overlay"
        type="button"
        aria-label="Đóng menu"
        @click="closeSidebar"
      />
      <main class="main-content">
        <router-view />
      </main>
    </div>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppFooter from './AppFooter.vue'
import AppHeader from './AppHeader.vue'
import AppSidebar from './AppSidebar.vue'

const route = useRoute()
const sidebarOpen = ref(false)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}

function closeSidebar() {
  sidebarOpen.value = false
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    closeSidebar()
  }
}

watch(
  () => route.fullPath,
  () => closeSidebar()
)

onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))
</script>
