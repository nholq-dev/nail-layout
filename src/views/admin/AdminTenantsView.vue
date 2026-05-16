<template>
  <section class="content-frame dashboard-frame">
    <PageHeader
      kicker="System admin"
      title="Danh sach tenant"
      description="Quan ly cac tiem nail dang su dung he thong theo goi, trang thai va ngay het han."
    >
      <template #actions>
        <router-link class="button primary" to="/admin/tenants/new">Tao tenant</router-link>
      </template>
    </PageHeader>
    <ContentToolbar search-placeholder="Tim tenant, salon hoac email chu tiem">
      <select class="select" aria-label="Trang thai tenant">
        <option>Tat ca trang thai</option>
        <option>Dang hoat dong</option>
        <option>Tam khoa</option>
      </select>
    </ContentToolbar>
    <div class="panel table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Tenant</th>
            <th>Chu tiem</th>
            <th>Goi</th>
            <th>Trang thai</th>
            <th>Het han</th>
            <th>Hanh dong</th>
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
  { name: 'luxe-nail', owner: 'Linh Pham', plan: 'Growth', status: 'Dang hoat dong', expires: '30/06/2026' },
  { name: 'bloom-bar', owner: 'Vy Nguyen', plan: 'Starter', status: 'Dang hoat dong', expires: '15/06/2026' }
]
</script>
