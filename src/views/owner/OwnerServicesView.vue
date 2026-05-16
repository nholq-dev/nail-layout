<template>
  <section class="content-frame dashboard-frame">
    <PageHeader
      kicker="Chu tiem"
      title="Dich vu"
      description="Cau hinh danh sach dich vu, gia, thoi luong va trang thai hien thi."
    >
      <template #actions>
        <button class="button primary" type="button">Them dich vu</button>
      </template>
    </PageHeader>

    <div class="panel table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Ten dich vu</th>
            <th>Thoi luong</th>
            <th>Gia</th>
            <th>Trang thai</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="service in services" :key="service.name">
            <td>{{ service.name }}</td>
            <td>{{ service.time }}</td>
            <td>{{ service.price }}</td>
            <td><span class="badge success">Dang hien thi</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
import PageHeader from '../../components/ui/PageHeader.vue'

const services = [
  { name: 'Gel manicure', time: '45 phut', price: '350.000 VND' },
  { name: 'Spa pedicure', time: '60 phut', price: '420.000 VND' },
  { name: 'Acrylic full set', time: '90 phut', price: '780.000 VND' }
]
</script>
