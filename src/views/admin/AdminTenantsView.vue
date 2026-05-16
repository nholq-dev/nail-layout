<template>
  <section class="content-frame dashboard-frame">
    <PageHeader
      kicker="System admin"
      title="Danh sách tenant"
      description="Quản lý các tiệm nail đang sử dụng hệ thống theo gói, trạng thái và ngày hết hạn."
    >
      <template #actions>
        <router-link class="button primary" to="/admin/tenants/new">Tạo tenant</router-link>
      </template>
    </PageHeader>
    <ContentToolbar search-placeholder="Tìm tenant, salon hoặc email chủ tiệm">
      <select class="select" aria-label="Trạng thái tenant">
        <option>Tất cả trạng thái</option>
        <option>Đang hoạt động</option>
        <option>Tạm khóa</option>
      </select>
    </ContentToolbar>
    <div class="panel table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Tenant</th>
            <th>Chủ tiệm</th>
            <th>Gói</th>
            <th>Trạng thái</th>
            <th>Hết hạn</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tenant in tenants" :key="tenant.name">
            <td>{{ tenant.name }}</td>
            <td>{{ tenant.owner }}</td>
            <td>{{ tenant.plan }}</td>
            <td><span class="badge success">{{ tenant.status }}</span></td>
            <td>{{ tenant.expires }}</td>
            <td><router-link class="button" to="/admin/tenants/demo-luxe">Xem</router-link></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContentToolbar from '../../components/ui/ContentToolbar.vue'
import PageHeader from '../../components/ui/PageHeader.vue'

const tenants = [
  { name: 'luxe-nail', owner: 'Linh Phạm', plan: 'Growth', status: 'Đang hoạt động', expires: '30/06/2026' },
  { name: 'bloom-bar', owner: 'Vy Nguyễn', plan: 'Starter', status: 'Đang hoạt động', expires: '15/06/2026' }
]
</script>
