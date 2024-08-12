<script setup lang="ts">
import ButtonCreate from '../components/buttons/ButtonCreate.vue'
import IconCreate from '../components/icons/IconCreate.vue'
import IconSearch from '../components/icons/IconSearch.vue'
</script>

<template>
  <header
    class="flex text-sm flex-col md:flex-row md:items-center max-w-screen-lg lg:max-w-[1172px] lg:mx-auto mx-5 justify-between border-b border-solid pt-6 pb-[31px] sm:pt-[30px] lg:pb-[33px] lg:pt-[42px] border-[#DCDEE4]"
  >
    <h2 class="text-4xl text-heading-grey mb-[20px] sm:mb-[26px] md:mb-0">Events</h2>

    <form class="flex flex-row items-center justify-between relative">
      <IconSearch class="hidden sm:block absolute left-[14px] text-[#8492A6]" />
      <input
        type="text"
        class="bg-white placeholder:text-placeholder-grey rounded-input border w-full md:w-auto md:min-w-[300px] p-input sm:pl-10 mr-[10px] transition-shadow duration-100 outline-0 focus:shadow-input focus:border-ui-green active:border-ui-green active:shadow-input"
        placeholder="Search 9 Events..."
      />

      <ButtonCreate>
        <IconCreate class="mr-[10px] hidden md:inline-block" />
        <span>Create</span> <span class="sr-only md:not-sr-only"> New Event</span>
      </ButtonCreate>
    </form>
  </header>
</template>
