<script setup>
const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: [
      'Up to 5 projects',
      '10 tasks per project',
      'Basic collaboration',
      'Email support',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$19',
    period: 'per month',
    features: [
      'Unlimited projects',
      'Unlimited tasks',
      'Advanced analytics',
      'Priority support',
      'Team collaboration',
      'Custom integrations',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$49',
    period: 'per month',
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Custom security settings',
      'Advanced reporting',
      'API access',
      'SLA guarantee',
    ],
    popular: false,
  },
]
</script>

<template>
  <section id="pricing" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose the plan that works best for you and your team
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="plan in plans"
          :key="plan.name"
          :class="[
            'relative p-8 rounded-lg border-2 transition duration-300',
            plan.popular
              ? 'border-indigo-600 shadow-xl scale-105'
              : 'border-gray-200 hover:border-indigo-300',
          ]"
        >
          <div
            v-if="plan.popular"
            class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold"
          >
            Most Popular
          </div>

          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">
              {{ plan.name }}
            </h3>
            <div class="mb-4">
              <span class="text-4xl font-bold text-gray-900">
                {{ plan.price }}
              </span>
              <span class="text-gray-600">/{{ plan.period }}</span>
            </div>
          </div>

          <ul class="space-y-3 mb-8">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-start"
            >
              <svg
                class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span class="text-gray-600">{{ feature }}</span>
            </li>
          </ul>

          <button
            :class="[
              'w-full py-3 px-4 rounded-lg font-semibold transition',
              plan.popular
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200',
            ]"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

