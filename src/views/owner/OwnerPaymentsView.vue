<template>
  <section class="content-frame dashboard-frame">
    <PageHeader
      kicker="Chu tiem"
      title="Thanh toan"
      description="Theo doi trang thai thanh toan, giao dich, tip va bien lai cua tung lich hen."
    />
    <div class="panel table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Ma giao dich</th>
            <th>Khach hang</th>
            <th>Phuong thuc</th>
            <th>So tien</th>
            <th>Trang thai</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="payment in payments" :key="payment.code">
            <td>{{ payment.code }}</td>
            <td>{{ payment.customer }}</td>
            <td>{{ payment.method }}</td>
            <td>{{ payment.amount }}</td>
            <td><span class="badge success">{{ payment.status }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
import PageHeader from '../../components/ui/PageHeader.vue'

const payments = [
  { code: 'PAY-1042', customer: 'Minh Anh', method: 'The', amount: '350.000 VND', status: 'Da thanh toan' },
  { code: 'PAY-1043', customer: 'Bao Tran', method: 'Tien mat', amount: '420.000 VND', status: 'Da thanh toan' }
]
</script>
