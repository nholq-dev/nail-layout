<template>
  <section class="content-frame dashboard-frame">
    <PageHeader
      kicker="Chủ tiệm"
      title="Thanh toán"
      description="Theo dõi trạng thái thanh toán, giao dịch, tip và biên lai của từng lịch hẹn."
    />
    <div class="panel table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Mã giao dịch</th>
            <th>Khách hàng</th>
            <th>Phương thức</th>
            <th>Số tiền</th>
            <th>Trạng thái</th>
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
  { code: 'PAY-1042', customer: 'Minh Anh', method: 'Thẻ', amount: '350.000 VND', status: 'Đã thanh toán' },
  { code: 'PAY-1043', customer: 'Bảo Trân', method: 'Tiền mặt', amount: '420.000 VND', status: 'Đã thanh toán' }
]
</script>
