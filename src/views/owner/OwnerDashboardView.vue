<template>
  <section class="content-frame dashboard-frame">
    <PageHeader
      kicker="Chủ tiệm"
      title="Tổng quan"
      description="Theo dõi hoạt động kinh doanh, lịch hẹn và doanh thu của tiệm trong ngày."
    >
      <template #actions>
        <router-link class="button primary" to="/booking">Tạo lịch hẹn</router-link>
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
          <h2 class="panel-title">Lịch hẹn sắp tới</h2>
        </div>
        <div v-for="item in appointments" :key="item.customer" class="panel-row">
          <strong>{{ item.customer }}</strong>
          <p class="muted">{{ item.service }} - {{ item.time }}</p>
        </div>
      </section>
      <section class="chart-placeholder state-box">Biểu đồ doanh thu theo ngày</section>
    </div>
  </section>
</template>

<script setup lang="ts">
import PageHeader from '../../components/ui/PageHeader.vue'

const metrics = [
  { label: 'Doanh thu hôm nay', value: '12,8 tr', delta: '+18%' },
  { label: 'Lịch hẹn hôm nay', value: '34', delta: '+6' },
  { label: 'Chờ xác nhận', value: '7', delta: 'Cần xử lý' },
  { label: 'Nhân viên đang làm', value: '9', delta: 'Đúng tiến độ' }
]

const appointments = [
  { customer: 'Minh Anh', service: 'Gel manicure', time: '09:30' },
  { customer: 'Bảo Trân', service: 'Spa pedicure', time: '10:15' },
  { customer: 'Thu Nguyen', service: 'Nail art', time: '11:00' }
]
</script>
