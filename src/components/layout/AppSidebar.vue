<template>
  <aside class="app-sidebar" :class="{ open }" aria-label="Dieu huong chinh">
    <section class="sidebar-section">
      <p class="sidebar-title">Khach hang</p>
      <ul class="nav-list">
        <li v-for="item in customerNav" :key="item.to">
          <router-link class="nav-link" :to="item.to">{{ item.label }}</router-link>
        </li>
      </ul>
    </section>
    <section class="sidebar-section">
      <p class="sidebar-title">Chu tiem</p>
      <ul class="nav-list">
        <li v-for="item in ownerNav" :key="item.to">
          <router-link class="nav-link" :to="item.to">{{ item.label }}</router-link>
        </li>
      </ul>
    </section>
    <section class="sidebar-section">
      <p class="sidebar-title">Admin he thong</p>
      <ul class="nav-list">
        <li v-for="item in adminNav" :key="item.to">
          <router-link class="nav-link" :to="item.to">{{ item.label }}</router-link>
        </li>
      </ul>
    </section>
  </aside>
</template>

<script setup lang="ts">
defineProps<{
  open: boolean
}>()

const customerNav = [
  { label: 'Kham pha tiem nail', to: '/salons' },
  { label: 'Dat lich', to: '/booking' },
  { label: 'Lich hen cua toi', to: '/appointments' }
]

const ownerNav = [
  { label: 'Tong quan', to: '/owner' },
  { label: 'Lich hen', to: '/owner/appointments' },
  { label: 'Dich vu', to: '/owner/services' },
  { label: 'Nhan vien', to: '/owner/staff' },
  { label: 'Doanh thu', to: '/owner/revenue' },
  { label: 'Thanh toan', to: '/owner/payments' }
]

const adminNav = [
  { label: 'Tong quan he thong', to: '/admin' },
  { label: 'Tenants', to: '/admin/tenants' },
  { label: 'Tao tenant', to: '/admin/tenants/new' },
  { label: 'Goi dich vu', to: '/admin/plans' },
  { label: 'Thanh toan SaaS', to: '/admin/billing' },
  { label: 'Nguoi dung', to: '/admin/users' }
]
</script>
