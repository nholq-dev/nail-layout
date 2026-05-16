<template>
  <section class="content-frame dashboard-frame">
    <PageHeader
      kicker="Chu tiem"
      title="Quan ly lich hen"
      description="Xem lich hen theo ngay, trang thai xac nhan va nhan vien phu trach."
    />
    <ContentToolbar search-placeholder="Tim khach hang hoac ma lich">
      <select class="select" aria-label="Trang thai">
        <option>Tat ca trang thai</option>
        <option>Cho xac nhan</option>
        <option>Da xac nhan</option>
      </select>
    </ContentToolbar>
    <div class="state-box">Loading, empty va error state san sang gan du lieu API.</div>
  </section>
</template>

<script setup lang="ts">
import ContentToolbar from '../../components/ui/ContentToolbar.vue'
import PageHeader from '../../components/ui/PageHeader.vue'
</script>
