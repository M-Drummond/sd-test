<script setup lang="ts">
import { ref } from 'vue'
import type EventData from '../types/EventData.ts'
import type { PropType } from 'vue'

import IconEllipsisVertical from '../components/icons/IconEllipsisVertical.vue'
import IconArLogoCircle from '../components/icons/IconArLogoCircle.vue'
import EventCardMenu from '../components/EventCardMenu.vue'

defineProps({
  event: {
    type: Object as PropType<EventData>,
    required: true
  }
})

// bool to show/hide the menu per-card. in the three dots menu
const eventMenuVisible = ref(false)

// toggle it
function toggleEventCardMenu() {
  eventMenuVisible.value = !eventMenuVisible.value
}
</script>

<template>
  <article
    @mouseleave="eventMenuVisible = false"
    class="relative flex flex-col w-full bg-white border border-solid group border-grey-300 rounded-card"
  >
    <button @click="toggleEventCardMenu" class="py-4 px-5 absolute z-50 right-0 top-0">
      <IconEllipsisVertical class="text-white right-4 top-4" />
    </button>

    <div v-show="eventMenuVisible">
      <EventCardMenu />
    </div>
    <div class="relative cursor-pointer">
      <IconArLogoCircle class="absolute -bottom-4 z-50 left-[30px]" />
      <responsive-image :image="event.image" :classes="`relative z-50`" />
      <div class="absolute inset-0 z-20 flex flex-col items-center justify-center">
        <div
          role="presentation"
          aria-role="decoration"
          class="opacity-0 group-hover:opacity-90 bg-overlay-blue rounded-card duration-300 absolute inset-0"
        />
        <a
          href="#"
          class="inline-block p-3 relative z-40 min-w-[120px] text-center text-white duration-300 border border-white border-solid opacity-0 hover:bg-white hover:text-black rounded-btn group-hover:opacity-100"
          >View Event</a
        >
        >
      </div>
    </div>
    <h3 class="mb-2 mt-6 truncate px-base">
      <a href="#" v-text="event.title" />
    </h3>
    <span class="mb-4 text-meta-grey pl-base" v-text="`${event.location} ${event.date}`" />
  </article>
</template>

<style scoped>
h3 {
  font-size: 20px;
  margin-bottom: 7px;
}

span {
  line-height: 25px;
  font-size: 16px;
}
</style>
