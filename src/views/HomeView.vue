<template>
  <section class="content-frame">
    <PageHeader
      kicker="Nail platform"
      title="Quan ly va dat lich tiem nail"
      description="Mot layout Vue.js cho khach hang tim salon, chu tiem van hanh kinh doanh, va admin quan ly SaaS multi-tenant."
    >
      <template #actions>
        <router-link class="button primary" to="/salons">Kham pha salon</router-link>
      </template>
    </PageHeader>

    <div class="grid three">
      <article class="card">
        <h2 class="panel-title">Khach hang</h2>
        <p class="muted">Tim salon gan vi tri, xem dich vu, danh gia va dat lich nhanh.</p>
        <router-link class="button" to="/booking">Dat lich</router-link>
      </article>
      <article class="card">
        <h2 class="panel-title">Chu tiem</h2>
        <p class="muted">Theo doi doanh thu, lich hen, nhan vien, dich vu va thanh toan.</p>
        <router-link class="button" to="/owner">Mo dashboard</router-link>
      </article>
      <article class="card">
        <h2 class="panel-title">System admin</h2>
        <p class="muted">Tao tenant, quan ly goi SaaS, trang thai thanh toan va nguoi dung.</p>
        <router-link class="button" to="/admin">Quan ly he thong</router-link>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import PageHeader from '../components/ui/PageHeader.vue'
</script>
