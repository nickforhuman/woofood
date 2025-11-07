<template>
  <div class="w-full flex justify-center rounded-2xl">
    <div class="max-w-2xl w-full h-126 grid md:grid-cols-2 grid-cols-1 shadow-xl rounded-2xl">
      <!-- left side start  -->
      <div
        class="relative bg-[url('@/assets/contents/auth/fastfood.jpg')] bg-center bg-cover flex justify-center items-center flex-col rounded-2xl"
      >
        <div class="absolute rounded-2xl w-full h-full bg-[rgba(0,0,0,0.6)]"></div>
        <div class="z-10 text-center">
          <div class="flex justify-center items-center p-4">
            <User class="w-16 h-16 text-secondary" />
          </div>
          <div class="py-2">
            <button
              type="button"
              class="px-4 py-2 bg-secondary rounded-md cursor-pointer text-primary font-bold w-64"
            >
              Register now
            </button>
          </div>

          <router-link to="/questions" class="text-gray-100"> Have you question? </router-link>
        </div>
      </div>
      <!-- left side end  -->
      <!-- right side start  -->
      <div class="flex justify-center items-center rounded-2xl">
        <form action="" class="w-full flex flex-col justify-center items-center p-2">
          <div class="py-2">
            <label for="e-mail" class="text-gray-400">*e-mail</label>

            <input
              type="email"
              placeholder="example@gmail.com"
              class="px-12 py-2 text-center focus:outline focus:outline-primary/70 focus:ring focus:ring-primary/30 transition-all border border-gray-200 rounded-xl"
              required
            />
          </div>
          <div class="py-2">
            <label for="e-mail" class="text-gray-400">*password</label>

            <input
              type="password"
              class="px-12 py-2 focus:outline focus:outline-primary/70 focus:ring focus:ring-primary/30 transition-all border text-center border-gray-200 rounded-xl"
              placeholder="*********"
              required
            />
          </div>

          <div class="py-2">
            <button
              type="submit"
              class="py-2 px-4 w-64 rounded-md font-bold bg-primary text-secondary"
            >
              sign in
            </button>
          </div>
          <router-link to="/forgot-password" class="text-xs">forgot password ?</router-link>
        </form>
      </div>
      <!-- right side end  -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { User } from 'lucide-vue-next'
</script>
