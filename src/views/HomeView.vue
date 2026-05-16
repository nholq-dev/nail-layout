<template>
  <section class="content-frame">
    <PageHeader
      kicker="Nền tảng nail"
      title="Quản lý và đặt lịch tiệm nail"
      description="Một layout Vue.js cho khách hàng tìm salon, chủ tiệm vận hành kinh doanh, và admin quản lý SaaS multi-tenant."
    >
      <template #actions>
        <router-link class="button primary" to="/salons">Khám phá salon</router-link>
      </template>
    </PageHeader>

    <div class="grid three">
      <article class="card">
        <h2 class="panel-title">Khách hàng</h2>
        <p class="muted">Tìm salon gần vị trí, xem dịch vụ, đánh giá và đặt lịch nhanh.</p>
        <router-link class="button" to="/booking">Đặt lịch</router-link>
      </article>
      <article class="card">
        <h2 class="panel-title">Chủ tiệm</h2>
        <p class="muted">Theo dõi doanh thu, lịch hẹn, nhân viên, dịch vụ và thanh toán.</p>
        <router-link class="button" to="/owner">Mở dashboard</router-link>
      </article>
      <article class="card">
        <h2 class="panel-title">System admin</h2>
        <p class="muted">Tạo tenant, quản lý gói SaaS, trạng thái thanh toán và người dùng.</p>
        <router-link class="button" to="/admin">Quản lý hệ thống</router-link>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import PageHeader from '../components/ui/PageHeader.vue'
</script>
