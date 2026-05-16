import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import SalonSearchView from './views/SalonSearchView.vue'
import SalonDetailView from './views/SalonDetailView.vue'
import BookingView from './views/BookingView.vue'
import MyAppointmentsView from './views/MyAppointmentsView.vue'
import OwnerDashboardView from './views/owner/OwnerDashboardView.vue'
import OwnerAppointmentsView from './views/owner/OwnerAppointmentsView.vue'
import OwnerStaffView from './views/owner/OwnerStaffView.vue'
import OwnerServicesView from './views/owner/OwnerServicesView.vue'
import OwnerRevenueView from './views/owner/OwnerRevenueView.vue'
import OwnerPaymentsView from './views/owner/OwnerPaymentsView.vue'
import AdminDashboardView from './views/admin/AdminDashboardView.vue'
import AdminTenantsView from './views/admin/AdminTenantsView.vue'
import AdminCreateTenantView from './views/admin/AdminCreateTenantView.vue'
import AdminTenantDetailView from './views/admin/AdminTenantDetailView.vue'
import AdminPlansView from './views/admin/AdminPlansView.vue'
import AdminSaasBillingView from './views/admin/AdminSaasBillingView.vue'
import AdminUsersView from './views/admin/AdminUsersView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/salons', name: 'salons', component: SalonSearchView },
  { path: '/salons/demo-luxe', name: 'salon-detail', component: SalonDetailView },
  { path: '/booking', name: 'booking', component: BookingView },
  { path: '/appointments', name: 'my-appointments', component: MyAppointmentsView },
  { path: '/owner', name: 'owner-dashboard', component: OwnerDashboardView },
  { path: '/owner/appointments', name: 'owner-appointments', component: OwnerAppointmentsView },
  { path: '/owner/staff', name: 'owner-staff', component: OwnerStaffView },
  { path: '/owner/services', name: 'owner-services', component: OwnerServicesView },
  { path: '/owner/revenue', name: 'owner-revenue', component: OwnerRevenueView },
  { path: '/owner/payments', name: 'owner-payments', component: OwnerPaymentsView },
  { path: '/admin', name: 'admin-dashboard', component: AdminDashboardView },
  { path: '/admin/tenants', name: 'admin-tenants', component: AdminTenantsView },
  { path: '/admin/tenants/new', name: 'admin-create-tenant', component: AdminCreateTenantView },
  { path: '/admin/tenants/demo-luxe', name: 'admin-tenant-detail', component: AdminTenantDetailView },
  { path: '/admin/plans', name: 'admin-plans', component: AdminPlansView },
  { path: '/admin/billing', name: 'admin-billing', component: AdminSaasBillingView },
  { path: '/admin/users', name: 'admin-users', component: AdminUsersView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
