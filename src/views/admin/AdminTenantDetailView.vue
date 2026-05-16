<template>
  <section class="content-frame dashboard-frame">
    <PageHeader
      kicker="System admin"
      title="Tenant: luxe-nail"
      description="Thong tin salon, chu tiem, goi dich vu, thanh toan SaaS va nhat ky hoat dong."
    >
      <template #actions>
        <button class="button" type="button">Tam khoa</button>
        <button class="button primary" type="button">Gia han</button>
      </template>
    </PageHeader>

    <div class="grid three">
      <article class="card">
        <span class="muted">Goi hien tai</span>
        <p class="metric-value">Growth</p>
      </article>
      <article class="card">
        <span class="muted">Nhan vien</span>
        <p class="metric-value">12</p>
      </article>
      <article class="card">
        <span class="muted">Lich hen thang nay</span>
        <p class="metric-value">842</p>
      </article>
    </div>

    <section class="panel" style="margin-top: 16px">
      <div class="panel-header">
        <h2 class="panel-title">Nhat ky hoat dong</h2>
      </div>
      <div class="panel-row">Chu tiem cap nhat bang gia dich vu.</div>
      <div class="panel-row">He thong tao hoa don SaaS thang 05/2026.</div>
    </section>
  </section>
</template>

<script setup lang="ts">
import PageHeader from '../../components/ui/PageHeader.vue'
</script>
