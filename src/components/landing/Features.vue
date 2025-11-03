<script setup>
const features = [
  {
    icon: '📋',
    title: 'Task Management',
    description: 'Create, organize, and track tasks with ease. Set priorities and deadlines to stay on top of everything.',
  },
  {
    icon: '👥',
    title: 'Team Collaboration',
    description: 'Work together seamlessly with your team. Assign tasks, share files, and communicate in real-time.',
  },
  {
    icon: '📊',
    title: 'Project Analytics',
    description: 'Get insights into your project progress with comprehensive analytics and reporting tools.',
  },
  {
    icon: '🔔',
    title: 'Smart Notifications',
    description: 'Stay informed with real-time notifications for important updates and deadline reminders.',
  },
  {
    icon: '📱',
    title: 'Cross-Platform',
    description: 'Access your projects from anywhere. Works seamlessly on desktop, tablet, and mobile devices.',
  },
  {
    icon: '🔒',
    title: 'Secure & Private',
    description: 'Your data is protected with enterprise-grade security and encryption. Your privacy matters.',
  },
]
</script>

<template>
  <section id="features" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Powerful Features
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Everything you need to manage your projects efficiently
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
        >
          <div class="text-4xl mb-4">{{ feature.icon }}</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">
            {{ feature.title }}
          </h3>
          <p class="text-gray-600">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

