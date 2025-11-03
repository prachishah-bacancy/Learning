<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <nav class="bg-white shadow-lg fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="text-2xl font-bold text-indigo-600">
            TaskFlow
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <router-link
              to="/"
              class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition"
            >
              Home
            </router-link>
            <a
              href="#features"
              class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition"
            >
              Features
            </a>
            <a
              href="#pricing"
              class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition"
            >
              Pricing
            </a>
            <router-link
              to="/admin"
              class="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition"
            >
              Admin Panel
            </router-link>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <Disclosure v-slot="{ open }">
            <DisclosureButton
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <Bars3Icon v-if="!open" class="h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="h-6 w-6" aria-hidden="true" />
            </DisclosureButton>

            <DisclosurePanel class="md:hidden">
              <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <router-link
                  to="/"
                  class="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </router-link>
                <a
                  href="#features"
                  class="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  class="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Pricing
                </a>
                <router-link
                  to="/admin"
                  class="bg-indigo-600 text-white hover:bg-indigo-700 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Admin Panel
                </router-link>
              </div>
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
    </div>
  </nav>
</template>

