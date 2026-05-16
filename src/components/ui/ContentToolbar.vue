<template>
  <div class="toolbar">
    <input class="field" type="search" :placeholder="searchPlaceholder" />
    <slot />
    <div class="segmented" aria-label="Chế độ hiển thị">
      <button type="button" class="active">Grid</button>
      <button type="button">List</button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  searchPlaceholder?: string
}>()
</script>
