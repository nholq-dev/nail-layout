<template>
  <section class="content-frame dashboard-frame">
    <PageHeader
      kicker="System admin"
      title="Người dùng hệ thống"
      description="Quản lý người dùng theo role Customer, Salon Owner, Staff và System Admin."
    />
    <div class="state-box">Trạng thái empty: chưa nạp danh sách người dùng từ Clerk/backend.</div>
  </section>
</template>

<script setup lang="ts">
import PageHeader from '../../components/ui/PageHeader.vue'
</script>
