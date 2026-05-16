<template>
  <section class="content-frame">
    <PageHeader
      kicker="Booking"
      title="Dat lich lam nail"
      description="Chon dich vu, nhan vien, ngay gio va xac nhan thong tin khach hang."
    />

    <div class="grid two">
      <form class="card form-grid">
        <div class="form-field">
          <label for="service">Dich vu</label>
          <select id="service" class="select">
            <option>Gel manicure - 350.000 VND</option>
            <option>Spa pedicure - 420.000 VND</option>
          </select>
        </div>
        <div class="form-field">
          <label for="staff">Nhan vien</label>
          <select id="staff" class="select">
            <option>Bat ky nhan vien nao</option>
            <option>Linh</option>
            <option>Vy</option>
          </select>
        </div>
        <div class="form-field">
          <label for="date">Ngay</label>
          <input id="date" class="field" type="date" />
        </div>
        <div class="form-field">
          <label for="time">Khung gio</label>
          <select id="time" class="select">
            <option>09:30</option>
            <option>11:00</option>
            <option>14:30</option>
          </select>
        </div>
        <div class="form-field">
          <label for="name">Ho ten</label>
          <input id="name" class="field" placeholder="Nguyen Van A" />
        </div>
        <div class="form-field">
          <label for="phone">So dien thoai</label>
          <input id="phone" class="field" placeholder="090..." />
        </div>
      </form>
      <aside class="card">
        <h2 class="panel-title">Tom tat lich hen</h2>
        <p class="muted">Salon: Luxe Nail Studio</p>
        <p class="metric-value">350.000 VND</p>
        <button class="button primary" type="button">Xac nhan dat lich</button>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import PageHeader from '../components/ui/PageHeader.vue'
</script>
