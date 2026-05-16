<template>
  <section class="content-frame">
    <PageHeader
      kicker="Salon detail"
      title="Luxe Nail Studio"
      description="12 Nguyen Hue - Mo cua 09:00 den 20:00 - 4.9 sao tu 328 danh gia."
    >
      <template #actions>
        <router-link class="button primary" to="/booking">Dat lich</router-link>
      </template>
    </PageHeader>

    <div class="grid two">
      <div class="panel">
        <div class="panel-header">
          <h2 class="panel-title">Dich vu va bang gia</h2>
        </div>
        <div v-for="service in services" :key="service.name" class="panel-row">
          <strong>{{ service.name }}</strong>
          <p class="muted">{{ service.time }} - {{ service.price }}</p>
        </div>
      </div>
      <div class="panel">
        <div class="panel-header">
          <h2 class="panel-title">Danh gia gan day</h2>
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
  { name: 'Gel manicure', time: '45 phut', price: '350.000 VND' },
  { name: 'Spa pedicure', time: '60 phut', price: '420.000 VND' },
  { name: 'Nail art premium', time: '75 phut', price: '650.000 VND' }
]

const reviews = [
  { name: 'Minh Anh', text: 'Nhan vien dung gio, mau gel ben va khong gian sach.' },
  { name: 'Thanh Ha', text: 'Dat lich nhanh, salon xac nhan trong vai phut.' }
]
</script>
