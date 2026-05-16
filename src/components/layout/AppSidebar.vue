<template>
  <aside class="app-sidebar" :class="{ open }" aria-label="Điều hướng chính">
    <section class="sidebar-section">
      <p class="sidebar-title">{{ currentSectionTitle }}</p>
      <ul class="nav-list">
        <li v-for="item in visibleNav" :key="item.to">
          <router-link class="nav-link" :to="item.to">{{ item.label }}</router-link>
        </li>
      </ul>
    </section>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCurrentUser } from '../../composables/useCurrentUser'

defineProps<{
  open: boolean
}>()

const { currentRole } = useCurrentUser()

const customerNav = [
  { label: 'Khám phá tiệm nail', to: '/salons' },
  { label: 'Đặt lịch', to: '/booking' },
  { label: 'Lịch hẹn của tôi', to: '/appointments' }
]

const ownerNav = [
  { label: 'Tổng quan', to: '/owner' },
  { label: 'Lịch hẹn', to: '/owner/appointments' },
  { label: 'Dịch vụ', to: '/owner/services' },
  { label: 'Nhân viên', to: '/owner/staff' },
  { label: 'Doanh thu', to: '/owner/revenue' },
  { label: 'Thanh toán', to: '/owner/payments' }
]

const adminNav = [
  { label: 'Tổng quan hệ thống', to: '/admin' },
  { label: 'Tenants', to: '/admin/tenants' },
  { label: 'Tạo tenant', to: '/admin/tenants/new' },
  { label: 'Gói dịch vụ', to: '/admin/plans' },
  { label: 'Thanh toán SaaS', to: '/admin/billing' },
  { label: 'Người dùng', to: '/admin/users' }
]

const visibleNav = computed(() => {
  if (currentRole.value === 'admin') {
    return adminNav
  }

  if (currentRole.value === 'owner') {
    return ownerNav
  }

  return customerNav
})

const currentSectionTitle = computed(() => {
  if (currentRole.value === 'admin') {
    return 'Quản trị hệ thống'
  }

  if (currentRole.value === 'owner') {
    return 'Quản lý tiệm nail'
  }

  return 'Khách hàng'
})
</script>
