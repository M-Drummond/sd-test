<script setup lang="ts">
import type ResponsiveImage from '../../types/ResponsiveImage.ts'
import type { PropType } from 'vue'

defineProps({
  image: Object as PropType<ResponsiveImage>,
  classes: String
})
</script>
<template>
  <picture v-if="image">
    <source :srcset="image.srcset![0]!" media="(min-width: 768px)" />
    <source :srcset="image.srcset![1]!" media="(min-width: 1200px)" />

    {{ image.width }}

    <img
      :src="image.src"
      :alt="image.alt"
      :width="image.width"
      :height="image.height"
      :classes
      class="w-full h-full block"
    />
  </picture>
</template>
