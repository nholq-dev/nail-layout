<template>
  <header class="app-header">
    <div class="brand">
      <button class="icon-button mobile-only" type="button" aria-label="Mở menu" @click="$emit('toggle-sidebar')">
        <span aria-hidden="true">≡</span>
      </button>
      <router-link class="brand" to="/" aria-label="Trang chủ NailOps">
        <span class="brand-mark">N</span>
        <span>
          NailOps
          <span class="brand-subtitle">Đặt lịch & SaaS</span>
        </span>
      </router-link>
    </div>
    <input class="field global-search" type="search" placeholder="Tìm salon, lịch hẹn, tenant..." />
    <div class="header-actions">
      <select v-model="currentRole" class="select role-select" aria-label="Loại người dùng đăng nhập">
        <option value="customer">Khách hàng</option>
        <option value="owner">Chủ tiệm nail</option>
        <option value="admin">Quản trị hệ thống</option>
      </select>
      <button class="icon-button" type="button" aria-label="Thông báo">!</button>
      <button class="icon-button" type="button" aria-label="Đổi giao diện">A</button>
      <button class="button" type="button">{{ roleLabel }}</button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useCurrentUser } from '../../composables/useCurrentUser'

defineEmits<{
  (event: 'toggle-sidebar'): void
}>()

const { currentRole, roleLabel } = useCurrentUser()
</script>
