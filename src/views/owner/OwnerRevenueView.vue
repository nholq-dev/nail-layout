<template>
  <section class="content-frame dashboard-frame">
    <PageHeader
      kicker="Chu tiem"
      title="Doanh thu"
      description="Theo doi doanh thu theo thoi gian, dich vu, nhan vien va phuong thuc thanh toan."
    />
    <ContentToolbar search-placeholder="Tim giao dich">
      <select class="select" aria-label="Thoi gian">
        <option>Hom nay</option>
        <option>Tuan nay</option>
        <option>Thang nay</option>
      </select>
    </ContentToolbar>
    <div class="grid two">
      <article class="card">
        <span class="muted">Tong doanh thu</span>
        <p class="metric-value">86,4 tr VND</p>
        <span class="badge success">+22% so voi ky truoc</span>
      </article>
      <div class="chart-placeholder state-box">Bieu do doanh thu theo dich vu</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContentToolbar from '../../components/ui/ContentToolbar.vue'
import PageHeader from '../../components/ui/PageHeader.vue'
</script>
