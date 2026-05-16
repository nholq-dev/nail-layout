<template>
  <section class="content-frame dashboard-frame">
    <PageHeader
      kicker="Chu tiem"
      title="Nhan vien"
      description="Quan ly ho so, ca lam viec, hieu suat va trang thai lam viec."
    >
      <template #actions>
        <button class="button primary" type="button">Them nhan vien</button>
      </template>
    </PageHeader>

    <div class="grid three">
      <article v-for="staff in staffList" :key="staff.name" class="card">
        <span class="badge success">{{ staff.status }}</span>
        <h2 class="panel-title">{{ staff.name }}</h2>
        <p class="muted">{{ staff.role }}</p>
        <p>{{ staff.bookings }} lich hen - {{ staff.revenue }} doanh thu</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import PageHeader from '../../components/ui/PageHeader.vue'

const staffList = [
  { name: 'Linh Pham', role: 'Senior technician', status: 'Dang lam', bookings: 8, revenue: '3,2 tr' },
  { name: 'Vy Nguyen', role: 'Nail artist', status: 'Dang lam', bookings: 6, revenue: '2,7 tr' },
  { name: 'Hanh Le', role: 'Pedicure specialist', status: 'Nghi ca chieu', bookings: 4, revenue: '1,8 tr' }
]
</script>
