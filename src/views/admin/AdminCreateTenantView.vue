<template>
  <section class="content-frame">
    <PageHeader
      kicker="System admin"
      title="Tạo tenant mới"
      description="Thiết lập dữ liệu ban đầu để chủ tiệm có thể đăng nhập và cấu hình salon."
    />

    <form class="card form-grid">
      <div v-for="field in fields" :key="field.id" class="form-field">
        <label :for="field.id">{{ field.label }}</label>
        <input :id="field.id" class="field" :placeholder="field.placeholder" />
      </div>
      <div class="form-field">
        <label for="plan">Gói SaaS</label>
        <select id="plan" class="select">
          <option>Starter</option>
          <option>Growth</option>
          <option>Scale</option>
        </select>
      </div>
      <div class="form-field">
        <label for="status">Trạng thái kích hoạt</label>
        <select id="status" class="select">
          <option>Kích hoạt ngay</option>
          <option>Chờ kích hoạt</option>
        </select>
      </div>
      <button class="button primary" type="button">Tạo tenant</button>
    </form>
  </section>
</template>

<script setup lang="ts">
import PageHeader from '../../components/ui/PageHeader.vue'

const fields = [
  { id: 'tenantName', label: 'Tên tenant', placeholder: 'luxe-nail' },
  { id: 'salonName', label: 'Tên tiệm nail', placeholder: 'Luxe Nail Studio' },
  { id: 'ownerName', label: 'Chủ tiệm', placeholder: 'Linh Phạm' },
  { id: 'ownerEmail', label: 'Email chủ tiệm', placeholder: 'owner@example.com' },
  { id: 'phone', label: 'Số điện thoại', placeholder: '090...' },
  { id: 'startDate', label: 'Ngày bắt đầu', placeholder: '2026-05-16' }
]
</script>
