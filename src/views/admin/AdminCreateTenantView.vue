<template>
  <section class="content-frame">
    <PageHeader
      kicker="System admin"
      title="Tao tenant moi"
      description="Thiet lap du lieu ban dau de chu tiem co the dang nhap va cau hinh salon."
    />

    <form class="card form-grid">
      <div v-for="field in fields" :key="field.id" class="form-field">
        <label :for="field.id">{{ field.label }}</label>
        <input :id="field.id" class="field" :placeholder="field.placeholder" />
      </div>
      <div class="form-field">
        <label for="plan">Goi SaaS</label>
        <select id="plan" class="select">
          <option>Starter</option>
          <option>Growth</option>
          <option>Scale</option>
        </select>
      </div>
      <div class="form-field">
        <label for="status">Trang thai kich hoat</label>
        <select id="status" class="select">
          <option>Kich hoat ngay</option>
          <option>Cho kich hoat</option>
        </select>
      </div>
      <button class="button primary" type="button">Tao tenant</button>
    </form>
  </section>
</template>

<script setup lang="ts">
import PageHeader from '../../components/ui/PageHeader.vue'

const fields = [
  { id: 'tenantName', label: 'Ten tenant', placeholder: 'luxe-nail' },
  { id: 'salonName', label: 'Ten tiem nail', placeholder: 'Luxe Nail Studio' },
  { id: 'ownerName', label: 'Chu tiem', placeholder: 'Linh Pham' },
  { id: 'ownerEmail', label: 'Email chu tiem', placeholder: 'owner@example.com' },
  { id: 'phone', label: 'So dien thoai', placeholder: '090...' },
  { id: 'startDate', label: 'Ngay bat dau', placeholder: '2026-05-16' }
]
</script>
