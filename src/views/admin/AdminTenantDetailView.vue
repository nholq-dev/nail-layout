<template>
  <section class="content-frame dashboard-frame">
    <PageHeader
      kicker="System admin"
      title="Tenant: luxe-nail"
      description="Thông tin salon, chủ tiệm, gói dịch vụ, thanh toán SaaS và nhật ký hoạt động."
    >
      <template #actions>
        <button class="button" type="button">Tạm khóa</button>
        <button class="button primary" type="button">Gia hạn</button>
      </template>
    </PageHeader>

    <div class="grid three">
      <article class="card">
        <span class="muted">Gói hiện tại</span>
        <p class="metric-value">Growth</p>
      </article>
      <article class="card">
        <span class="muted">Nhân viên</span>
        <p class="metric-value">12</p>
      </article>
      <article class="card">
        <span class="muted">Lịch hẹn tháng này</span>
        <p class="metric-value">842</p>
      </article>
    </div>

    <section class="panel" style="margin-top: 16px">
      <div class="panel-header">
        <h2 class="panel-title">Nhật ký hoạt động</h2>
      </div>
      <div class="panel-row">Chủ tiệm cập nhật bảng giá dịch vụ.</div>
      <div class="panel-row">Hệ thống tạo hóa đơn SaaS tháng 05/2026.</div>
    </section>
  </section>
</template>

<script setup lang="ts">
import PageHeader from '../../components/ui/PageHeader.vue'
</script>
