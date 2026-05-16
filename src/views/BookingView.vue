<template>
  <section class="content-frame">
    <PageHeader
      kicker="Booking"
      title="Đặt lịch làm nail"
      description="Chọn dịch vụ, nhân viên, ngày giờ và xác nhận thông tin khách hàng."
    />

    <div class="grid two">
      <form class="card form-grid">
        <div class="form-field">
          <label for="service">Dịch vụ</label>
          <select id="service" class="select">
            <option>Gel manicure - 350.000 VND</option>
            <option>Spa pedicure - 420.000 VND</option>
          </select>
        </div>
        <div class="form-field">
          <label for="staff">Nhân viên</label>
          <select id="staff" class="select">
            <option>Bất kỳ nhân viên nào</option>
            <option>Linh</option>
            <option>Vy</option>
          </select>
        </div>
        <div class="form-field">
          <label for="date">Ngày</label>
          <input id="date" class="field" type="date" />
        </div>
        <div class="form-field">
          <label for="time">Khung giờ</label>
          <select id="time" class="select">
            <option>09:30</option>
            <option>11:00</option>
            <option>14:30</option>
          </select>
        </div>
        <div class="form-field">
          <label for="name">Họ tên</label>
          <input id="name" class="field" placeholder="Nguyễn Văn A" />
        </div>
        <div class="form-field">
          <label for="phone">Số điện thoại</label>
          <input id="phone" class="field" placeholder="090..." />
        </div>
      </form>
      <aside class="card">
        <h2 class="panel-title">Tóm tắt lịch hẹn</h2>
        <p class="muted">Salon: Luxe Nail Studio</p>
        <p class="metric-value">350.000 VND</p>
        <button class="button primary" type="button">Xác nhận đặt lịch</button>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import PageHeader from '../components/ui/PageHeader.vue'
</script>
