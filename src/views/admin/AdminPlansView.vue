<template>
  <section class="content-frame dashboard-frame">
    <PageHeader
      kicker="System admin"
      title="Goi dich vu SaaS"
      description="Quan ly cac goi Starter, Growth, Scale va gioi han tinh nang."
    />
    <div class="grid three">
      <article v-for="plan in plans" :key="plan.name" class="card">
        <h2 class="panel-title">{{ plan.name }}</h2>
        <p class="metric-value">{{ plan.price }}</p>
        <p class="muted">{{ plan.limit }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import PageHeader from '../../components/ui/PageHeader.vue'

const plans = [
  { name: 'Starter', price: '1,2 tr/thang', limit: '1 salon, 5 nhan vien' },
  { name: 'Growth', price: '2,8 tr/thang', limit: '3 salon, 30 nhan vien' },
  { name: 'Scale', price: 'Lien he', limit: 'Multi-branch va SLA rieng' }
]
</script>
