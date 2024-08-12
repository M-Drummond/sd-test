<script setup lang="ts">
import SectionHeader from '../components/SectionHeader.vue'
import EventsGrid from '../components/EventsGrid.vue'
</script>

<template>
  <div class="bg-pale-grey min-h-screen pb-12">
    <SectionHeader :header-text="'Events'" />
    <EventsGrid />
  </div>
</template>
