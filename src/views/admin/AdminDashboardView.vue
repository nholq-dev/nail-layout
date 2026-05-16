<template>
  <section class="content-frame dashboard-frame">
    <PageHeader
      kicker="System admin"
      title="Tong quan he thong"
      description="Theo doi tenant, goi SaaS, doanh thu nen tang va canh bao van hanh."
    />

    <div class="grid four">
      <article v-for="metric in metrics" :key="metric.label" class="card">
        <span class="muted">{{ metric.label }}</span>
        <p class="metric-value">{{ metric.value }}</p>
        <span class="badge" :class="metric.kind">{{ metric.note }}</span>
      </article>
    </div>

    <div class="grid two" style="margin-top: 16px">
      <div class="chart-placeholder state-box">Doanh thu SaaS theo thang</div>
      <section class="panel">
        <div class="panel-header">
          <h2 class="panel-title">Tenant can xu ly</h2>
        </div>
        <div class="panel-row">3 tenant sap het han goi trong 7 ngay.</div>
        <div class="panel-row">1 tenant dang cho kich hoat.</div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import PageHeader from '../../components/ui/PageHeader.vue'

const metrics = [
  { label: 'Tong tenant', value: '128', note: '+9 thang nay', kind: 'success' },
  { label: 'Dang hoat dong', value: '116', note: '90,6%', kind: 'success' },
  { label: 'Tam khoa', value: '4', note: 'Can review', kind: 'warning' },
  { label: 'SaaS MRR', value: '412 tr', note: '+14%', kind: 'success' }
]
</script>
