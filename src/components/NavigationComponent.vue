<template>
  <!-- desktop menu start  -->
  <div
    class="w-16 select-none h-screen sticky bg-primary/5 backdrop-blur-md hidden md:flex flex flex-col justify-between items-center"
  >
    <!-- logo start  -->
    <div class="flex justify-center items-center">
      <router-link to="/">
        <img src="@/assets/contents/logo/icon.png" class="w-24" alt="" />
      </router-link>
    </div>
    <!-- logo end  -->
    <div>
      <ul class="flex flex-col gap-3">
        <li class="bg-primary p-3 text-secondary rounded-full">
          <router-link to="/">
            <House class="w-6 h-6" />
          </router-link>
        </li>
        <li @click="$emit('toggle-basket')" class="p-3 text-primary rounded-full cursor-pointer">
          <ShoppingBasket />
        </li>
        <li class="p-3 text-primary rounded-full">
          <router-link to="/">
            <HandPlatter />
          </router-link>
        </li>
        <li class="p-3 text-primary rounded-full">
          <router-link to="/">
            <ChartNoAxesColumn />
          </router-link>
        </li>
        <li class="p-3 text-primary rounded-full">
          <router-link to="/user/authentication">
            <User />
          </router-link>
        </li>
      </ul>
    </div>
    <div class="m-2 flex flex-col justify-center items-center">
      <router-link class="p-3 text-primary rounded-full" to="/">
        <HeartHandshake />
      </router-link>

      <router-link to="/" class="p-3 text-primary rounded-full">
        <Bolt />
      </router-link>
    </div>
  </div>
  <!-- desktop menu end  -->
  <!-- mobile menu start  -->
  <div class="flex md:hidden shadow-xl z-50 fixed bottom-0 justify-center items-center w-full">
    <ul
      class="flex justify-around items-center p-6 bg-primary/10 bacdrop-blur-md text-primary w-full"
    >
      <li @click="$emit('toggle-basket')">
        <ShoppingBasket />
      </li>
      <li>
        <router-link to="">
          <HandPlatter />
        </router-link>
      </li>
      <li>
        <router-link to=""><House /></router-link>
      </li>
      <li>
        <router-link to="">
          <ChartNoAxesColumn />
        </router-link>
      </li>
      <li>
        <router-link to="">
          <User />
        </router-link>
      </li>
    </ul>
  </div>
  <!-- mobile menu end  -->
</template>

<script setup lang="ts">
import {
  House,
  ShoppingBasket,
  HandPlatter,
  ChartNoAxesColumn,
  User,
  HeartHandshake,
  Bolt,
} from 'lucide-vue-next'
defineEmits(['toggle-basket'])
</script>
