<template>
  <section class="content-frame">
    <PageHeader
      kicker="Khach hang"
      title="Tim tiem nail gan ban"
      description="Kham pha cac tiem nail gan vi tri hien tai, xem danh gia va dat lich nhanh."
    >
      <template #actions>
        <router-link class="button primary" to="/booking">Dat lich ngay</router-link>
      </template>
    </PageHeader>

    <ContentToolbar search-placeholder="Nhap dia diem hoac ten salon">
      <select class="select" aria-label="Khoang cach">
        <option>Duoi 3 km</option>
        <option>Duoi 5 km</option>
        <option>Duoi 10 km</option>
      </select>
      <select class="select" aria-label="Dich vu">
        <option>Manicure</option>
        <option>Pedicure</option>
        <option>Nail art</option>
      </select>
      <button class="button" type="button">Dung vi tri hien tai</button>
    </ContentToolbar>

    <div class="grid two">
      <div class="grid">
        <article v-for="salon in salons" :key="salon.name" class="card">
          <span class="badge success">{{ salon.rating }} sao</span>
          <h2 class="panel-title">{{ salon.name }}</h2>
          <p class="muted">{{ salon.address }} - {{ salon.distance }}</p>
          <p>{{ salon.services }}</p>
          <router-link class="button" to="/salons/demo-luxe">Xem chi tiet</router-link>
        </article>
      </div>
      <aside class="map-placeholder state-box">
        Ban do vi tri salon
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContentToolbar from '../components/ui/ContentToolbar.vue'
import PageHeader from '../components/ui/PageHeader.vue'

const salons = [
  {
    name: 'Luxe Nail Studio',
    address: '12 Nguyen Hue',
    distance: '1.2 km',
    rating: '4.9',
    services: 'Gel polish, spa pedicure, nail art'
  },
  {
    name: 'Bloom Beauty Bar',
    address: '88 Le Loi',
    distance: '2.4 km',
    rating: '4.8',
    services: 'Manicure, acrylic, cham soc mong'
  },
  {
    name: 'Soft Touch Nails',
    address: '31 Pasteur',
    distance: '3.1 km',
    rating: '4.7',
    services: 'Pedicure, gel builder, repair'
  }
]
</script>
