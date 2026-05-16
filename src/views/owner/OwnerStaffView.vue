<template>
  <section class="content-frame dashboard-frame">
    <PageHeader
      kicker="Chủ tiệm"
      title="Nhân viên"
      description="Quản lý hồ sơ, ca làm việc, hiệu suất và trạng thái làm việc."
    >
      <template #actions>
        <button class="button primary" type="button">Thêm nhân viên</button>
      </template>
    </PageHeader>

    <div class="grid three">
      <article v-for="staff in staffList" :key="staff.name" class="card">
        <span class="badge success">{{ staff.status }}</span>
        <h2 class="panel-title">{{ staff.name }}</h2>
        <p class="muted">{{ staff.role }}</p>
        <p>{{ staff.bookings }} lịch hẹn - {{ staff.revenue }} doanh thu</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import PageHeader from '../../components/ui/PageHeader.vue'

const staffList = [
  { name: 'Linh Phạm', role: 'Kỹ thuật viên senior', status: 'Đang làm', bookings: 8, revenue: '3,2 tr' },
  { name: 'Vy Nguyễn', role: 'Nail artist', status: 'Đang làm', bookings: 6, revenue: '2,7 tr' },
  { name: 'Hạnh Lê', role: 'Chuyên viên pedicure', status: 'Nghỉ ca chiều', bookings: 4, revenue: '1,8 tr' }
]
</script>
