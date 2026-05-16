<template>
  <section class="content-frame">
    <PageHeader
      kicker="Khách hàng"
      title="Lịch hẹn của tôi"
      description="Theo dõi lịch sắp tới, lịch đã hoàn thành và trạng thái xác nhận."
    />

    <div class="panel table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Salon</th>
            <th>Dịch vụ</th>
            <th>Thời gian</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in appointments" :key="item.time">
            <td>{{ item.salon }}</td>
            <td>{{ item.service }}</td>
            <td>{{ item.time }}</td>
            <td><span class="badge success">{{ item.status }}</span></td>
            <td><button class="button" type="button">Xem</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
import PageHeader from '../components/ui/PageHeader.vue'

const appointments = [
  { salon: 'Luxe Nail Studio', service: 'Gel manicure', time: '18/05 09:30', status: 'Đã xác nhận' },
  { salon: 'Bloom Beauty Bar', service: 'Pedicure', time: '22/05 14:00', status: 'Chờ xác nhận' }
]
</script>
