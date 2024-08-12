<script setup lang="ts">
import Events from '../../data/Events.json'
import EventCard from '../components/EventCard.vue'

import type EventData from '../types/EventData.ts'

const events = Events.events as EventData[]
</script>
<template>
  <main
    class="grid site-width grid-cols-1 sm:gap-x-4 gap-y-[25px] md:gap-y-[31px] lg:gap-x-[45px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8"
  >
    <EventCard v-for="(event, index) in events" :key="`${index}__${event.title}`" :event />
  </main>
</template>
