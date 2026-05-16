<template>
  <section class="content-frame">
    <PageHeader
      kicker="Khach hang"
      title="Lich hen cua toi"
      description="Theo doi lich sap toi, lich da hoan thanh va trang thai xac nhan."
    />

    <div class="panel table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Salon</th>
            <th>Dich vu</th>
            <th>Thoi gian</th>
            <th>Trang thai</th>
            <th>Hanh dong</th>
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
  { salon: 'Luxe Nail Studio', service: 'Gel manicure', time: '18/05 09:30', status: 'Da xac nhan' },
  { salon: 'Bloom Beauty Bar', service: 'Pedicure', time: '22/05 14:00', status: 'Cho xac nhan' }
]
</script>
