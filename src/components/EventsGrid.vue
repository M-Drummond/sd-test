<script setup lang="ts">
import Events from '../../data/Events.json'
import EventCard from '../components/EventCard.vue'

import type EventData from '../types/EventData.ts'

const events = Events.events as EventData[]
</script>
<template>
  <main
    class="grid max-w-screen-lg lg:max-w-[1172px] mx-auto grid-cols-1 lg:px-0 px-5 sm:gap-x-4 gap-y-5 sm:grid-cols-1 sm:max-w-[380px] md:max-w-full md:grid-cols-3 py-8"
  >
    <EventCard v-for="(event, index) in events" :key="`${index}__${event.title}`" :event />
  </main>
</template>
