import { computed, ref, watch } from 'vue'

export type UserRole = 'customer' | 'owner' | 'admin'

const storageKey = 'nail-layout-user-role'

function readInitialRole(): UserRole {
  if (typeof window === 'undefined') {
    return 'customer'
  }

  const savedRole = window.localStorage.getItem(storageKey)
  if (savedRole === 'admin' || savedRole === 'owner' || savedRole === 'customer') {
    return savedRole
  }

  return 'customer'
}

const currentRole = ref<UserRole>(readInitialRole())

watch(currentRole, (role) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(storageKey, role)
  }
})

export function useCurrentUser() {
  const roleLabel = computed(() => {
    if (currentRole.value === 'admin') {
      return 'Quản trị hệ thống'
    }

    if (currentRole.value === 'owner') {
      return 'Chủ tiệm nail'
    }

    return 'Khách hàng'
  })

  return {
    currentRole,
    roleLabel
  }
}
