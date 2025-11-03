<script setup>
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  FolderIcon,
  UsersIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  BellIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/vue/24/outline'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: HomeIcon },
  { name: 'Projects', href: '/admin/projects', icon: FolderIcon },
  { name: 'Tasks', href: '/admin/tasks', icon: ChartBarIcon },
  { name: 'Users', href: '/admin/users', icon: UsersIcon },
  { name: 'Settings', href: '/admin/settings', icon: Cog6ToothIcon },
]

const isActive = (href) => {
  return route.path === href || route.path.startsWith(href + '/')
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Mobile sidebar -->
    <Disclosure v-slot="{ open }" as="nav" class="lg:hidden bg-white border-b border-gray-200 shadow-sm">
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex items-center">
            <div class="flex-shrink-0 flex items-center">
              <div class="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <span class="text-white font-bold text-sm">TF</span>
              </div>
              <h1 class="ml-3 text-xl font-bold text-gray-900">TaskFlow</h1>
            </div>
          </div>
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Bars3Icon v-if="!open" class="h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
      <DisclosurePanel class="lg:hidden border-t border-gray-200 bg-white">
        <div class="pt-2 pb-3 space-y-1 px-4">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            :class="[
              isActive(item.href)
                ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                : 'border-transparent text-gray-700 hover:bg-gray-50 hover:border-gray-300',
              'border-l-4 py-3 pl-4 pr-4 flex items-center text-base font-medium rounded-r-md',
            ]"
          >
            <component
              :is="item.icon"
              :class="[
                isActive(item.href) ? 'text-indigo-500' : 'text-gray-400',
                'mr-4 h-5 w-5',
              ]"
            />
            {{ item.name }}
          </router-link>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <div class="flex">
      <!-- Desktop sidebar -->
      <div class="hidden lg:flex lg:flex-shrink-0">
        <div class="flex flex-col w-64">
          <div class="flex flex-col flex-grow bg-white border-r border-gray-200 shadow-sm min-h-screen">
            <!-- Logo/Brand -->
            <div class="flex items-center h-16 px-6 border-b border-gray-200">
              <div class="h-10 w-10 rounded-lg bg-indigo-600 flex items-center justify-center">
                <span class="text-white font-bold">TF</span>
              </div>
              <div class="ml-3">
                <h1 class="text-lg font-bold text-gray-900">TaskFlow</h1>
                <p class="text-xs text-gray-500">Admin Panel</p>
              </div>
            </div>

            <!-- Navigation -->
            <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <nav class="flex-1 px-3 space-y-1">
                <router-link
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.href"
                  :class="[
                    isActive(item.href)
                      ? 'bg-indigo-50 text-indigo-700 border-indigo-500'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 border-transparent',
                    'group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg border-l-4 transition-colors',
                  ]"
                >
                  <component
                    :is="item.icon"
                    :class="[
                      isActive(item.href)
                        ? 'text-indigo-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 flex-shrink-0 h-5 w-5',
                    ]"
                  />
                  {{ item.name }}
                </router-link>
              </nav>

              <!-- User section at bottom -->
              <div class="px-3 pt-4 border-t border-gray-200">
                <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50">
                  <div class="flex-shrink-0">
                    <UserCircleIcon class="h-8 w-8 text-gray-400" />
                  </div>
                  <div class="ml-3 flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate">Admin User</p>
                    <p class="text-xs text-gray-500 truncate">admin@taskflow.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main content area -->
      <div class="flex flex-col flex-1 overflow-hidden">
        <!-- Top header bar -->
        <header class="bg-white shadow-sm border-b border-gray-200">
          <div class="flex items-center justify-end h-16 px-4 sm:px-6 lg:px-8">
            <!-- Right side actions -->
            <div class="flex items-center space-x-4">
              <!-- Notifications -->
              <button
                class="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <BellIcon class="h-6 w-6" />
              </button>

              <!-- User menu -->
              <Menu as="div" class="relative">
                <MenuButton
                  class="flex items-center text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <div class="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
                    <span class="text-white font-medium text-xs">AU</span>
                  </div>
                </MenuButton>
                <MenuItems
                  class="absolute right-0 mt-2 w-48 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                >
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'flex items-center px-4 py-2 text-sm text-gray-700',
                        ]"
                      >
                        <UserCircleIcon class="mr-3 h-5 w-5 text-gray-400" />
                        Your Profile
                      </a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'flex items-center px-4 py-2 text-sm text-gray-700',
                        ]"
                      >
                        <Cog6ToothIcon class="mr-3 h-5 w-5 text-gray-400" />
                        Settings
                      </a>
                    </MenuItem>
                    <div class="border-t border-gray-200"></div>
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'flex items-center px-4 py-2 text-sm text-gray-700',
                        ]"
                      >
                        <ArrowRightOnRectangleIcon class="mr-3 h-5 w-5 text-gray-400" />
                        Sign out
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </header>

        <!-- Main content -->
        <main class="flex-1 overflow-y-auto bg-gray-50">
          <div class="py-6 px-4 sm:px-6 lg:px-8">
            <slot />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

