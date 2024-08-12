<script setup lang="ts">
import EventCardMenuTopArrow from '../components/svg/EventCardMenuTopArrow.vue'

const options = [
  'Create Campaign',
  'Import ticket sales',
  'Edit event details',
  'Merge event',
  'Delete event'
]
</script>

<template>
  <div
    class="bg-white group border-menu-border-grey border-solid rounded-md border absolute z-30 shadow-dropdown right-0 w-full top-12"
  >
    <EventCardMenuTopArrow />

    <ul class="flex flex-col py-[20px] relative bg-white z-10">
      <li v-for="option in options" :key="option">
        <a
          href="#"
          class="w-full hover:bg-hover-purple px-5 hover:text-menu-active-purple transition-colors duration-300 block text-sm py-[10px]"
          >{{ option }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="pcss">
div {
  max-width: 205px;
  right: -10px;
}

svg {
  top: -10px;
  position: absolute;
  right: 10px;
}
</style>
