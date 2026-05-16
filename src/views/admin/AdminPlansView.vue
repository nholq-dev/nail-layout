<template>
  <section class="content-frame dashboard-frame">
    <PageHeader
      kicker="System admin"
      title="Gói dịch vụ SaaS"
      description="Quản lý các gói Starter, Growth, Scale và giới hạn tính năng."
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
  { name: 'Starter', price: '1,2 tr/tháng', limit: '1 salon, 5 nhân viên' },
  { name: 'Growth', price: '2,8 tr/tháng', limit: '3 salon, 30 nhân viên' },
  { name: 'Scale', price: 'Liên hệ', limit: 'Multi-branch và SLA riêng' }
]
</script>
