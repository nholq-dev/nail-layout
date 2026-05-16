<template>
  <section class="content-frame dashboard-frame">
    <PageHeader
      kicker="Chủ tiệm"
      title="Quản lý lịch hẹn"
      description="Xem lịch hẹn theo ngày, trạng thái xác nhận và nhân viên phụ trách."
    />
    <ContentToolbar search-placeholder="Tìm khách hàng hoặc mã lịch">
      <select class="select" aria-label="Trạng thái">
        <option>Tất cả trạng thái</option>
        <option>Chờ xác nhận</option>
        <option>Đã xác nhận</option>
      </select>
    </ContentToolbar>
    <div class="state-box">Loading, empty và error state sẵn sàng gắn dữ liệu API.</div>
  </section>
</template>

<script setup lang="ts">
import ContentToolbar from '../../components/ui/ContentToolbar.vue'
import PageHeader from '../../components/ui/PageHeader.vue'
</script>
