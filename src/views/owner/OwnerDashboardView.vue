<template>
  <section class="content-frame dashboard-frame">
    <PageHeader
      kicker="Chu tiem"
      title="Tong quan"
      description="Theo doi hoat dong kinh doanh, lich hen va doanh thu cua tiem trong ngay."
    >
      <template #actions>
        <router-link class="button primary" to="/booking">Tao lich hen</router-link>
      </template>
    </PageHeader>

    <div class="grid four">
      <article v-for="metric in metrics" :key="metric.label" class="card">
        <span class="muted">{{ metric.label }}</span>
        <p class="metric-value">{{ metric.value }}</p>
        <span class="badge success">{{ metric.delta }}</span>
      </article>
    </div>

    <div class="grid two" style="margin-top: 16px">
      <section class="panel">
        <div class="panel-header">
          <h2 class="panel-title">Lich hen sap toi</h2>
        </div>
        <div v-for="item in appointments" :key="item.customer" class="panel-row">
          <strong>{{ item.customer }}</strong>
          <p class="muted">{{ item.service }} - {{ item.time }}</p>
        </div>
      </section>
      <section class="chart-placeholder state-box">Bieu do doanh thu theo ngay</section>
    </div>
  </section>
</template>

<script setup lang="ts">
import PageHeader from '../../components/ui/PageHeader.vue'

const metrics = [
  { label: 'Doanh thu hom nay', value: '12,8 tr', delta: '+18%' },
  { label: 'Lich hen hom nay', value: '34', delta: '+6' },
  { label: 'Cho xac nhan', value: '7', delta: 'Can xu ly' },
  { label: 'Nhan vien dang lam', value: '9', delta: 'On track' }
]

const appointments = [
  { customer: 'Minh Anh', service: 'Gel manicure', time: '09:30' },
  { customer: 'Bao Tran', service: 'Spa pedicure', time: '10:15' },
  { customer: 'Thu Nguyen', service: 'Nail art', time: '11:00' }
]
</script>
