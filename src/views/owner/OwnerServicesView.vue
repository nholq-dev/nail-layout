<template>
  <section class="content-frame dashboard-frame">
    <PageHeader
      kicker="Chủ tiệm"
      title="Dịch vụ"
      description="Cấu hình danh sách dịch vụ, giá, thời lượng và trạng thái hiển thị."
    >
      <template #actions>
        <button class="button primary" type="button">Thêm dịch vụ</button>
      </template>
    </PageHeader>

    <div class="panel table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Tên dịch vụ</th>
            <th>Thời lượng</th>
            <th>Giá</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="service in services" :key="service.name">
            <td>{{ service.name }}</td>
            <td>{{ service.time }}</td>
            <td>{{ service.price }}</td>
            <td><span class="badge success">Đang hiển thị</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
import PageHeader from '../../components/ui/PageHeader.vue'

const services = [
  { name: 'Gel manicure', time: '45 phút', price: '350.000 VND' },
  { name: 'Spa pedicure', time: '60 phút', price: '420.000 VND' },
  { name: 'Acrylic full set', time: '90 phút', price: '780.000 VND' }
]
</script>
