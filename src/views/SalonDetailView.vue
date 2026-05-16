<template>
  <section class="content-frame">
    <PageHeader
      kicker="Chi tiết salon"
      title="Luxe Nail Studio"
      description="12 Nguyễn Huệ - Mở cửa 09:00 đến 20:00 - 4.9 sao từ 328 đánh giá."
    >
      <template #actions>
        <router-link class="button primary" to="/booking">Đặt lịch</router-link>
      </template>
    </PageHeader>

    <div class="grid two">
      <div class="panel">
        <div class="panel-header">
          <h2 class="panel-title">Dịch vụ và bảng giá</h2>
        </div>
        <div v-for="service in services" :key="service.name" class="panel-row">
          <strong>{{ service.name }}</strong>
          <p class="muted">{{ service.time }} - {{ service.price }}</p>
        </div>
      </div>
      <div class="panel">
        <div class="panel-header">
          <h2 class="panel-title">Đánh giá gần đây</h2>
        </div>
        <div v-for="review in reviews" :key="review.name" class="panel-row">
          <strong>{{ review.name }}</strong>
          <p class="muted">{{ review.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PageHeader from '../components/ui/PageHeader.vue'

const services = [
  { name: 'Gel manicure', time: '45 phút', price: '350.000 VND' },
  { name: 'Spa pedicure', time: '60 phút', price: '420.000 VND' },
  { name: 'Nail art premium', time: '75 phút', price: '650.000 VND' }
]

const reviews = [
  { name: 'Minh Anh', text: 'Nhân viên đúng giờ, màu gel bền và không gian sạch.' },
  { name: 'Thanh Hà', text: 'Đặt lịch nhanh, salon xác nhận trong vài phút.' }
]
</script>
