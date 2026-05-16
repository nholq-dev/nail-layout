<template>
  <section class="content-frame dashboard-frame">
    <PageHeader
      kicker="System admin"
      title="Thanh toán SaaS"
      description="Theo dõi hóa đơn, ngày hết hạn gói và trạng thái thanh toán của tenant."
    />
    <div class="state-box">Bảng thanh toán SaaS sẽ kết nối API billing.</div>
  </section>
</template>

<script setup lang="ts">
import PageHeader from '../../components/ui/PageHeader.vue'
</script>
