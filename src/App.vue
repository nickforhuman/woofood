<script setup lang="ts">
import { ref } from 'vue'
import NavigationComponent from './components/NavigationComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import TitleComponent from './components/TitleComponent.vue'
import BasketComponent from './components/BasketComponent.vue'

const isBasketVisible = ref(false)

const toggleBasket = () => {
  isBasketVisible.value = !isBasketVisible.value
}
</script>

<template>
  <main class="w-full h-screen flex overflow-hidden">
    <!-- Sol menü sabit -->
    <NavigationComponent @toggle-basket="toggleBasket" />

    <!-- Sağ ana alan -->
    <div class="flex flex-col w-full h-full">
      <!-- Üst başlıklar sabit -->
      <div class="flex-shrink-0">
        <TitleComponent />
        <HeaderComponent />
      </div>

      <!-- RouterView kaydırılabilir alan -->
      <div class="flex-1 overflow-y-auto p-4 relative">
        <router-view />
        <BasketComponent :visibleBasket="isBasketVisible" @close="isBasketVisible = false" />
      </div>
    </div>
  </main>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--color-primary);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
</style>
