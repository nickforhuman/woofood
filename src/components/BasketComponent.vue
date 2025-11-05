<template>
  <transition name="slide-left">
    <div
      v-if="visibleBasket"
      ref="basketRef"
      class="w-full md:w-96 z-50 h-screen fixed shadow-xl top-0 right-0 bg-secondary/10 backdrop-blur-md flex flex-col"
    >
      <!-- basket header start -->
      <div class="w-full py-4 px-4 flex justify-between items-center border-b border-primary/20">
        <h1 class="text-xl font-bold text-primary">Səbət</h1>
        <div
          class="rounded-full bg-primary p-2 cursor-pointer transition hover:scale-105"
          @click="$emit('close')"
        >
          <X class="w-6 h-6 text-secondary" />
        </div>
      </div>
      <!-- basket header end -->

      <!-- basket content start -->
      <div class="flex-1 overflow-y-auto px-4 py-2 space-y-3">
        <div
          v-for="(item, index) in basketItems"
          :key="item.id"
          class="flex items-center gap-3 bg-primary/5 p-3 rounded-xl shadow-sm hover:bg-primary/10 transition"
        >
          <!-- image -->
          <img
            :src="item.image"
            alt=""
            class="w-16 h-16 object-cover rounded-lg border border-primary/20"
          />

          <!-- info -->
          <div class="flex flex-col flex-1">
            <h2 class="text-base font-semibold text-black">{{ item.name }}</h2>
            <p class="text-sm text-gray-400 flex items-center gap-1">
              <Tag class="w-4 h-4" />
              {{ item.category }}
            </p>

            <!-- quantity control -->
            <div class="flex items-center mt-2 gap-3">
              <button
                class="p-1 bg-primary/20 rounded-full"
                @click="decreaseQuantity(index)"
                :disabled="item.quantity <= 1"
              >
                <Minus class="w-4 h-4 text-black" />
              </button>

              <span class="font-semibold text-black">{{ item.quantity }}</span>

              <button class="p-1 bg-primary/20 rounded-full" @click="increaseQuantity(index)">
                <Plus class="w-4 h-4 text-black" />
              </button>
            </div>
          </div>

          <!-- price & delete -->
          <div class="flex flex-col items-end gap-2">
            <p class="font-semibold text-success">${{ (item.price * item.quantity).toFixed(2) }}</p>
            <button
              class="text-danger hover:text-danger/30 transition"
              @click="removeItem(index)"
              title="Remove item"
            >
              <Trash2 class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- Empty basket -->
        <div
          v-if="basketItems.length === 0"
          class="text-center text-gray-400 py-12 flex flex-col items-center gap-3"
        >
          <ShoppingBag class="w-10 h-10" />
          <p>Səbət boşdur</p>
        </div>
      </div>
      <!-- basket content end -->

      <!-- footer -->
      <div class="border-t border-primary/20 p-4 flex justify-between items-center bg-primary/5">
        <span class="font-semibold text-primary">Ümumi:</span>
        <span class="font-bold text-xl text-primary">${{ totalPrice.toFixed(2) }}</span>
      </div>
      <div
        class="border-t border-primary/20 p-4 flex flex-col gap-2 justify-center items-center bg-primary/5"
      >
        <button
          type="button"
          class="w-full rounded-xl text-secondary bg-primary px-4 py-2 shadow-md hover:outline hover:outline-primary hover:ring hover:ring-primary cursor-pointer font-bold shadow-lg hover:bg-secondary hover:text-primary transition-all"
        >
          Checkout
        </button>
        <button
          type="button"
          @click="$emit('close')"
          class="w-full rounded-xl text-primary bg-primary/5 backdrop-blur-md px-4 py-2 shadow-md hover:outline hover:outline-primary hover:ring hover:ring-primary cursor-pointer font-bold shadow-lg hover:bg-secondary hover:text-primary transition-all"
        >
          Close Basket
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { X, Plus, Minus, Trash2, Tag, ShoppingBag } from 'lucide-vue-next'
import { onClickOutside } from '@vueuse/core'

defineProps({
  visibleBasket: {
    type: Boolean,
    required: true,
  },
})
const emit = defineEmits(['close'])
const basketRef = ref<HTMLElement | null>(null)
onClickOutside(basketRef, () => {
  emit('close')
})

const basketItems = ref([
  {
    id: 1,
    name: 'Margherita Pizza',
    category: 'Pizza',
    price: 12.5,
    quantity: 1,
    image: new URL('@/assets/contents/products/pizzas/1.png', import.meta.url).href,
  },
  {
    id: 2,
    name: 'Coca Cola 0.5L',
    category: 'Drink',
    price: 2.0,
    quantity: 2,
    image: new URL('@/assets/contents/products/drinks/2.jpg', import.meta.url).href,
  },
  {
    id: 3,
    name: 'Caesar Salad',
    category: 'Salad',
    price: 8.5,
    quantity: 1,
    image: new URL('@/assets/contents/products/salads/1.png', import.meta.url).href,
  },
])

const increaseQuantity = (index: number) => {
  const item = basketItems.value[index]
  if (item) {
    item.quantity++
  }
}

const decreaseQuantity = (index: number) => {
  const item = basketItems.value[index]
  if (item && item.quantity > 1) {
    item.quantity--
  }
}

const removeItem = (index: number) => {
  if (basketItems.value[index]) {
    basketItems.value.splice(index, 1)
  }
}

// Total price
const totalPrice = computed(() =>
  basketItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0),
)
</script>
