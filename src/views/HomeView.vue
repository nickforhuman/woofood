<template>
  <!-- intro component -->
  <IntroComponent />
  <!-- searchbar component  -->
  <div class="w-full flex md:hidden justify-center items-center">
    <div class="w-full py-4 flex justify-center items-center p-4">
      <SearchComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
import IntroComponent from '@/components/home/IntroComponent.vue'
import SearchComponent from '@/components/SearchComponent.vue'
</script>
