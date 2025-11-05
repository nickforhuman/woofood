<template>
  <div class="w-full py-2 grid md:grid-cols-3 grid-cols-2">
    <!-- logo start  -->
    <div class="flex items-center">
      <router-link to="/">
        <img src="@/assets/contents/logo/logo.png" class="h-8 md:h-12" alt="" />
      </router-link>
    </div>
    <!-- logo end  -->
    <!-- search bar start  -->
    <div class="md:flex hidden justify-center items-center">
      <SearchComponent />
    </div>
    <!-- search bar end  -->
    <!-- tools start  -->
    <div class="flex justify-end items-center">
      <ul class="flex justify-center items-center gap-4 px-2">
        <li class="flex shadow-md justfiy-center items-center p-3 bg-gray-100 rounded-full">
          <BadgePlus class="w-4 h-4" />
        </li>
        <li class="flex justfiy-center shadow-md items-center p-3 bg-gray-100 rounded-full">
          <BellRing class="w-4 h-4" />
        </li>
        <li class="flex justfiy-center items-center">
          <div class="w-12 h-12 rounded-full">
            <img
              src="@/assets/contents/profile/pp.png"
              class="object-cover rounded-full shadow-xl"
              alt=""
            />
          </div>
          <div class="md:flex hidden justify-center items-start flex-col mx-2">
            <h1 class="font-bold">Nick</h1>
            <p class="text-gray-400 text-xs">Jale Imanov</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- tools end  -->
  </div>
</template>

<script setup lang="ts">
import { BellRing, BadgePlus } from 'lucide-vue-next'
import SearchComponent from './SearchComponent.vue'
</script>
