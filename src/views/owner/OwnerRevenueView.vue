<template>
  <section class="content-frame dashboard-frame">
    <PageHeader
      kicker="Chủ tiệm"
      title="Doanh thu"
      description="Theo dõi doanh thu theo thời gian, dịch vụ, nhân viên và phương thức thanh toán."
    />
    <ContentToolbar search-placeholder="Tìm giao dịch">
      <select class="select" aria-label="Thời gian">
        <option>Hôm nay</option>
        <option>Tuần này</option>
        <option>Tháng này</option>
      </select>
    </ContentToolbar>
    <div class="grid two">
      <article class="card">
        <span class="muted">Tổng doanh thu</span>
        <p class="metric-value">86,4 tr VND</p>
        <span class="badge success">+22% so với kỳ trước</span>
      </article>
      <div class="chart-placeholder state-box">Biểu đồ doanh thu theo dịch vụ</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContentToolbar from '../../components/ui/ContentToolbar.vue'
import PageHeader from '../../components/ui/PageHeader.vue'
</script>
