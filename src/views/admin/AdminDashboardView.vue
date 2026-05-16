<template>
  <section class="content-frame dashboard-frame">
    <PageHeader
      kicker="System admin"
      title="Tổng quan hệ thống"
      description="Theo dõi tenant, gói SaaS, doanh thu nền tảng và cảnh báo vận hành."
    />

    <div class="grid four">
      <article v-for="metric in metrics" :key="metric.label" class="card">
        <span class="muted">{{ metric.label }}</span>
        <p class="metric-value">{{ metric.value }}</p>
        <span class="badge" :class="metric.kind">{{ metric.note }}</span>
      </article>
    </div>

    <div class="grid two" style="margin-top: 16px">
      <div class="chart-placeholder state-box">Doanh thu SaaS theo tháng</div>
      <section class="panel">
        <div class="panel-header">
          <h2 class="panel-title">Tenant cần xử lý</h2>
        </div>
        <div class="panel-row">3 tenant sắp hết hạn gói trong 7 ngày.</div>
        <div class="panel-row">1 tenant đang chờ kích hoạt.</div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import PageHeader from '../../components/ui/PageHeader.vue'

const metrics = [
  { label: 'Tổng tenant', value: '128', note: '+9 tháng này', kind: 'success' },
  { label: 'Đang hoạt động', value: '116', note: '90,6%', kind: 'success' },
  { label: 'Tạm khóa', value: '4', note: 'Cần review', kind: 'warning' },
  { label: 'SaaS MRR', value: '412 tr', note: '+14%', kind: 'success' }
]
</script>
