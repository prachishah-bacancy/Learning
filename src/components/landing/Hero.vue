<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const isDemoOpen = ref(false)

const openDemo = () => {
  isDemoOpen.value = true
}

const closeDemo = () => {
  isDemoOpen.value = false
}
</script>

<template>
  <section class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white pt-24 pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          Manage Your Projects with
          <span class="text-yellow-300">Ease</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
          Streamline your workflow, collaborate with your team, and achieve your goals faster with our comprehensive project management platform.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            class="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
          >
            Get Started Free
          </button>
          <button
            @click="openDemo"
            class="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
          >
            Watch Demo
          </button>
        </div>
      </div>
    </div>

    <!-- Demo Modal using Headless UI Dialog -->
    <Dialog :open="isDemoOpen" @close="closeDemo" class="relative z-50">
      <!-- Background overlay -->
      <div class="fixed inset-0 bg-black/30" aria-hidden="true" />

      <!-- Full-screen container -->
      <div class="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel
          class="w-full max-w-4xl bg-white rounded-lg shadow-xl p-6 transform transition-all"
        >
          <div class="flex justify-between items-center mb-4">
            <DialogTitle class="text-2xl font-bold text-gray-900">
              TaskFlow Demo
            </DialogTitle>
            <button
              @click="closeDemo"
              class="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-1"
            >
              <XMarkIcon class="h-6 w-6" />
            </button>
          </div>

          <div class="space-y-4">
            <div class="bg-indigo-50 rounded-lg p-6 text-center">
              <div class="text-6xl mb-4">📋</div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Interactive Demo Coming Soon!
              </h3>
              <p class="text-gray-600">
                Experience the power of TaskFlow. Create tasks, manage projects,
                and collaborate with your team - all in one place.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div class="bg-gray-50 p-4 rounded-lg">
                <div class="text-2xl mb-2">✅</div>
                <h4 class="font-semibold text-gray-900 mb-1">Task Management</h4>
                <p class="text-sm text-gray-600">
                  Organize and track all your tasks
                </p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <div class="text-2xl mb-2">👥</div>
                <h4 class="font-semibold text-gray-900 mb-1">Team Collaboration</h4>
                <p class="text-sm text-gray-600">
                  Work together seamlessly
                </p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <div class="text-2xl mb-2">📊</div>
                <h4 class="font-semibold text-gray-900 mb-1">Analytics</h4>
                <p class="text-sm text-gray-600">
                  Track your project progress
                </p>
              </div>
            </div>

            <div class="flex justify-end gap-3 mt-6">
              <button
                @click="closeDemo"
                class="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Close
              </button>
              <button
                class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  </section>
</template>

